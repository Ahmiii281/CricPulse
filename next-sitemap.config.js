/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.PUBLIC_APP_URL || 'https://www.cricpulse.com',
  generateRobotsTxt: true,
  changefreq: 'hourly',
  priority: 0.8
};
