import { useMemo, useSyncExternalStore } from 'react';

const listeners = new Set<() => void>();

export function normalizePathname(rawPath: string): string {
  if (!rawPath || rawPath === '/index.html') return '/';
  const clean = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean || '/';
}

function getLocationKey(): string {
  if (typeof window === 'undefined') return '/';
  return `${normalizePathname(window.location.pathname)}${window.location.search}${window.location.hash}`;
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  const onChange = () => callback();
  window.addEventListener('popstate', onChange);
  window.addEventListener('hashchange', onChange);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('popstate', onChange);
    window.removeEventListener('hashchange', onChange);
  };
}

export function navigateTo(href: string): void {
  if (typeof window === 'undefined') return;
  const [beforeHash, hashPart] = href.split('#');
  const [rawPath, queryPart] = (beforeHash || '/').split('?');
  const targetPath = normalizePathname(rawPath);
  const search = queryPart ? `?${queryPart}` : '';
  const hash = hashPart ? `#${hashPart}` : '';
  const nextUrl = `${targetPath}${search}${hash}`;

  if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextUrl) {
    window.history.pushState({}, '', nextUrl);
    listeners.forEach((listener) => listener());
  }

  if (hashPart) {
    setTimeout(() => {
      document.getElementById(hashPart)?.scrollIntoView({ behavior: 'smooth' });
    }, 40);
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

export function usePathname(): string {
  const loc = useSyncExternalStore(subscribe, getLocationKey, () => '/');
  return normalizePathname(loc);
}

export function useSearchParams(): URLSearchParams {
  const loc = useSyncExternalStore(subscribe, getLocationKey, () => '/');
  return useMemo(() => {
    const qIndex = loc.indexOf('?');
    if (qIndex === -1) return new URLSearchParams();
    const rawSearch = loc.slice(qIndex + 1).split('#')[0];
    return new URLSearchParams(rawSearch);
  }, [loc]);
}
