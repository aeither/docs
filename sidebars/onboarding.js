/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  onboarding: [
    // === Top Section ===
    {
      type: "doc",
      label: "Home",
      id: "0 0 Home",
    },
    {
      type: "doc",
      label: "Platform Overview",
      id: "0 1 Platform Overview",
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started",
        },
      ],
    },
    {
      type: "doc",
      label: "Create A Project",
      id: "6 1 Create",
    },

    // === Build Contracts ===
    {
      type: "link",
      label: "Extensions",
      href: "/extensions",
    },

    // === Deploy Contracts ===
    {
      type: "doc",
      label: "Release",
      id: "6 2 Releasing your contract",
    },
    {
      type: "doc",
      label: "Deploy",
      id: "6 3 Deploying your contract",
    },
    {
      type: "link",
      label: "Prebuilt Contracts",
      href: "/pre-built-contracts",
    },

    // === Build Apps ===
    {
      type: "link",
      label: "SDK",
      href: "/sdk",
    },
    {
      type: "link",
      label: "UI Components",
      href: "/sdk/ui-components/web3button",
    },
    {
      type: "link",
      label: "Auth",
      href: "/auth",
    },

    // === Manage Projects ===
    {
      type: "link",
      label: "Dashboard",
      href: "/dashboard",
    },
    // === Bottom Section ===
    {
      type: "category",
      label: "Templates",
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "7 Starter Kits",
        },
      ],
    },

    {
      type: "link",
      label: "Guides",
      href: "https://blog.thirdweb.com/guides/",
    },
    {
      type: "category",
      label: "SDK References",
      className: "bottom-menu-group",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "link",
          label: "JavaScript / TypeScript",
          href: "/typescript",
        },
        {
          type: "link",
          label: "React",
          href: "/react",
        },
        {
          type: "link",
          label: "Python",
          href: "/python",
        },
        {
          type: "link",
          label: "Go",
          href: "/go",
        },
        {
          type: "link",
          label: "Solidity",
          href: "/contracts",
        },
      ],
    },
  ],

  buildContracts: [
    {
      type: "autogenerated",
      dirName: "4 Contracts SDK",
    },
  ],

  prebuiltContracts: [
    {
      type: "autogenerated",
      dirName: "1 Pre-Built Contracts",
    },
  ],

  sdk: [
    {
      type: "autogenerated",
      dirName: "3 Web3 SDK",
    },
  ],

  auth: [
    {
      type: "autogenerated",
      dirName: "5 Authenticate",
    },
  ],

  dashboard: [
    {
      type: "autogenerated",
      dirName: "2 Contract Dashboard",
    },
  ],
};

module.exports = sidebars;
