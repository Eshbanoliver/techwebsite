/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://msinfinextech.com',
  generateRobotsTxt: false, // We created custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/_next/*'],

  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/services': 0.9,
      '/contact': 0.9,
      '/blog': 0.8,
      '/faq': 0.7,
    };

    return {
      loc: path,
      changefreq: path.startsWith('/blog/') ? 'daily' : config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
