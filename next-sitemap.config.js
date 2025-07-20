/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.yoranza.tech',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/private'], // if you want to exclude any paths
};
