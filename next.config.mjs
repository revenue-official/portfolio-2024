/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "external-content.duckduckgo.com",
            },
            {
                protocol: "https",
                hostname: "azibyaqoob.com",
            },
            {
                protocol: "https",
                hostname: "youtube.com",
            }
        ],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
};

export default nextConfig;
