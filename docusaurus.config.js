/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sundar UI Kit StyleGuide',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sundar.ico',
  organizationName: 'abbyjeet', // Usually your GitHub org/user name.
  projectName: 'sundar', // Usually your repo name.
  themeConfig: {
    colorMode: {      
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Sundar UI Kit StyleGuide',
      logo: {
        alt: 'Sundar UI Kit StyleGuide',
        src: 'img/sundar.png',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'help', label: 'Help', position: 'right'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abhijit Jathar. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebar.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // help: {
        //   id: 'help',
        //   routeBasePath: '/help',
        //   sidebarPath: require.resolve('./sidebar-help.js'),
        //   // Please change this to your repo.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
