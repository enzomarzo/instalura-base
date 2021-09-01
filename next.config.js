const redirectRules = require('./config/redirects');

module.exports = {
  eslint: {
    trailingSlash: true,
    async redirects() {
      return [
        redirectRules,
      ];
    },
    ignoreDuringBuilds: true,
  },
};
