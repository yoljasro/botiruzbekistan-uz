/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: [ 'uz', 'ru'],
    defaultLocale: 'uz'
  },
  output: "standalone",
  reactStrictMode: false
}

module.exports = nextConfig
