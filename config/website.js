const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Franklin - AI-driven Product Manager', // Navigation and Site Title
  siteTitleAlt: 'Franklin', // Alternative Site title for SEO
  siteTitleShort: 'Franklin', // short_name for manifest
  siteHeadline: 'I bring useful products to life.', // Headline for schema.org JSONLD
  siteUrl: 'https://www.franklinchristuraj.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Franklin Christuraj portfolio',
  author: 'Franklin', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@frankChristuraj', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
