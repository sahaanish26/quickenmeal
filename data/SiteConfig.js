const config = {
  siteTitle: " Quick Meal Recipe", // Site title.
  siteTitleShort: "Recipe Site", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Bengali style food recipes for delicious yet quick Meals", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://quickenmeal.com", // Domain of your website without pathPrefix.
  pathPrefix: "/recipes", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A cooking recipe website with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Gatsby Recipe Starter RSS feed", // Title of the RSS feed
  siteFBAppID: "182535625111526t", // FB Application ID for using app insights
  siteGATrackingID: "UA-161952605-1", // Tracking code ID for google analytics.
  siteVerification:"ld0WW9ivPWz55IGmdc9GHRRMlL0ZzGZ6WnmHYbzKvHo", //Site verification for google ld0WW9ivPWz55IGmdc9GHRRMlL0ZzGZ6WnmHYbzKvHo
  disqusShortname: "QM", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  userName: "Quicken Meal", // Username to display in the author segment.
  userEmail: "MaterialUser@example.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Phoenix,AZ", // User location to display in the author segment.
  userAvatar: "/logos/facebook_profile_image.png", // User avatar to display in the author segment.
  userAvatarSVG: "/logos/facebook_profile_image.png",
  userDescription:
    "We like to do creative things that brings delight to everyone's life" ,
        // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    /*{
      label: "GitHub",
      url: "https://github.com/sahaanish26/quickenmeal",
      iconClassName: "fa fa-github" //https://fontawesome.com/v4.7.0/icons/
    },
    {
      label: "Twitter",
      url: "https://twitter.com/becs",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:srimoyeesaha@gmail.com",
      iconClassName: "fa fa-envelope"
    },*/
    {
      label: "Meal Time/Type",
      url: "mailto:srimoyeesaha@gmail.com",
      iconClassName: "fa fa-clock-o"
    },
    {
      label: "Cuisine",
      url: "mailto:srimoyeesaha@gmail.com",
      iconClassName: "fa fa-globe"
    },
    {
      label: "Primary Ingredient",
      url: "mailto:srimoyeesaha@gmail.com",
      iconClassName: "fa fa-envelope-open-o"
    },
  ],
  copyright: "Copyright © 2020. Quicken Meal" ,
  gatsbyLogo:"/logos/gatsbylogoscreenshot.png", // Copyright string for the footer of the website and RSS feed.
  postsPerPage:3,
  postsPerIndexPage :6 //keeping it higher value since index page will mostly have the latest posts
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
