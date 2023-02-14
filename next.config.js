const nextConfig = {
  reactStrictMode: true,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    domains: ['mosaic.scdn.co', 'i.scdn.co'],
  },
}

module.exports = nextConfig
