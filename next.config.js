/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async redirects() {
        return [
          {
            source: '/deodorant',
            destination: '/blogg/alt-du-maa-vite-om-vaare-deodoranter',
            permanent: true,
          },
          {
            source: '/google',
            destination: 'https://g.co/kgs/Z3basDL',
            permanent: false,
          },
          {
            source: '/trustpilot',
            destination: 'https://no.trustpilot.com/review/naturity.no',
            permanent: false,
          }
        ]
    },
}