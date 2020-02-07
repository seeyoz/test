module.exports = {
  title: "VuePress-cli",
  description: "A lightweight cli for VuePress project.",
  dest: "./dist",
  base: "{{ base }}",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: {{ lineNumbers }} // close lineNumbers
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./nav"),
    sidebar: require("./sidebar"),
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    repo: "{{ repo }}",
    editLinks: {{ editLinks }},
    editLinkText: "Is something wrong or missing? Edit this page on github!"
  },
  module: {
    {{{ ruleLess }}}
    // rules: [
    //   {
    //     test: /\.less$/,
    //     loader: "less-loader", // compiles Less to CSS
    //   },
    // ],
  }
};