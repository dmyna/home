/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com'
            },
            {
                protocol: 'https',
                hostname: 'media.tenor.com'
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'raw.github.com'
            }
        ]
    },
    webpack: (config) => {
        config.resolve.modules.push(__dirname + '/src');

        return config;
    },
};

module.exports = nextConfig;
