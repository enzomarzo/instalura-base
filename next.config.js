const redirectRules = require('./config/redirects');

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
    trailingSlash: true,
    async redirects() {
      return redirectRules;
    },
    async headers() {
      return [
        {
          source: '/app/:path*/',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
          ],
        },
      ];
    },
  },
};
