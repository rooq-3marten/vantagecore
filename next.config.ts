export interface NextConfig {
  images?: {
    unoptimized?: boolean;
  };
}

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
