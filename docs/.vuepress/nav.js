module.exports = [
  // Nav 1
  {
    text: "Home",
    link: "/"
  },
  // Nav 2
  {
    text: "Menu 1",
    items: [
      { text: "SubMenu 1", link: "/Menu_1/SubMenu_1/" },
      { text: "SubMenu 2", link: "/Menu_1/SubMenu_2/" }
    ]
  },
  // Nav 3
  {
    text: "Menu 2",
    items: [
      {
        text: "Title",
        items: [
					{ text: "SubMenu 1", link: "https://vuepress.vuejs.org/" },
					{ text: "SubMenu 2", link: "https://vuepress.vuejs.org/" }
				]
      },
      {
        text: "Title",
        items: [
          { text: "SubMenu 1", link: "https://vuepress.vuejs.org/" },
					{ text: "SubMenu 2", link: "https://vuepress.vuejs.org/" }
        ]
			}
    ]
  },
  // Nav 4
  {
    text: "GitHub",
    link: "https://zpfz.github.io/vuepress-cli/"
  }
];
