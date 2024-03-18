type Skills = {
  categories: {
    items: {
      content: {
        hasLeftMargin: boolean;
        hasRightMargin: boolean;
        text: string;
        title?: string;
      }[];
      link?: string;
    }[];
    name: string;
    description?: string;
  }[];
};

export const SKILLS: Skills = {
  categories: [
    {
      items: [
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "SDLC",
              title: "Software Development Life Cycle",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Agile - Scrum",
            },
          ],
          link: "https://www.scrum.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Version Control",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Git Hooks",
            },
          ],
          link: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "CMS",
              title: "Content Management Websites",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Responsive Websites",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Web Accessibility Compliant Websites",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "App State",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Component State",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Reusable Web Components",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Private/Public Routes",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Persistent Login",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Idle Logout Timer",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Custom React Hooks",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Virtualization",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Large Dynamic Forms",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Dashboards",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Graphs",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "REST",
              title: "Representational State Transfer",
            },
            {
              hasLeftMargin: true,
              hasRightMargin: true,
              text: "API",
              title: "Application Programming Interface",
            },
            {
              hasLeftMargin: true,
              hasRightMargin: true,
              text: "Development",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "API",
              title: "Application Programming Interface",
            },
            {
              hasLeftMargin: true,
              hasRightMargin: true,
              text: "HTTP",
              title: "Hypertext Transfer Protocol",
            },
            {
              hasLeftMargin: true,
              hasRightMargin: true,
              text: "Requests",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Automated Unit Testing",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "CSR",
              title: "Client Side Rendering",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "SSR",
              title: "Server Side Rendering",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "SSG",
              title: "Static Site Generation",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "CI/CD",
              title: "Continuous Integration/Continuous Development",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Database Design",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "ERD",
              title: "Entity Relationship Diagrams",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Database Management",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: true,
              hasRightMargin: false,
              text: "Server Client",
            },
            {
              hasLeftMargin: true,
              hasRightMargin: false,
              text: "FTP",
              title: "File Transfer Protocol",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Documentation",
            },
          ],
        },
      ],
      name: "Development Concepts",
    },
    {
      description: "Languages, Frameworks, and Libraries",
      items: [
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "HTML",
              title: "Hypertext Markup Language",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "CSS",
              title: "Cascading Tile Sheets",
            },
          ],
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "Bootstrap" },
          ],
          link: "https://getbootstrap.com",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "JavaScript" },
          ],
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "jQuery" },
          ],
          link: "https://jquery.com",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "TypeScript" },
          ],
          link: "https://www.typescriptlang.org",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "Next" },
          ],
          link: "https://nextjs.org",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "NextAuth" },
          ],
          link: "https://next-auth.js.org",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "React" },
          ],
          link: "https://react.dev",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "React" },
            {
              hasLeftMargin: true,
              hasRightMargin: false,
              text: "DOM",
              title: "Document Object Model",
            },
          ],
          link: "https://react.dev/reference/react#react-dom",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "React Router",
            },
          ],
          link: "https://reactrouter.com/en/main",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: true,
              text: "DOM",
              title: "Document Object Model",
            },
            { hasLeftMargin: false, hasRightMargin: false, text: "Purify" },
          ],
          link: "https://github.com/cure53/DOMPurify",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "Redux" },
          ],
          link: "https://redux.js.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: true,
              text: "RTK",
              title: "Redux Toolkit",
            },
            { hasLeftMargin: false, hasRightMargin: false, text: "Query" },
          ],
          link: "https://redux-toolkit.js.org/rtk-query/overview",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "React Hook Form",
            },
          ],
          link: "https://react-hook-form.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "React Window",
            },
          ],
          link: "https://github.com/bvaughn/react-window",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "React Awesome Reveal",
            },
          ],
          link: "https://react-awesome-reveal.morello.dev",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "React Quill",
            },
          ],
          link: "https://github.com/zenoamaro/react-quill",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Jest",
            },
          ],
          link: "https://jestjs.io",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "React Testing Library",
            },
          ],
          link: "https://testing-library.com/docs/react-testing-library/intro",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "MSW",
              title: "Mock Service Worker",
            },
          ],
          link: "https://mswjs.io",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Vue",
            },
          ],
          link: "https://vuejs.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "VueX",
            },
          ],
          link: "https://vuex.vuejs.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Vuetify",
            },
          ],
          link: "https://vuetifyjs.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "MUI",
              title: "Material User Interface",
            },
          ],
          link: "https://mui.com/material-ui",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Chart.js",
            },
          ],
          link: "https://www.chartjs.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Node.js",
            },
          ],
          link: "https://nodejs.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Ajax",
            },
          ],
          link: "https://api.jquery.com/jQuery.ajax",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Axios",
            },
          ],
          link: "https://axios-http.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "SQL",
              title: "Structured Query Language",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Postgre",
            },
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "SQL",
              title: "Structured Query Language",
            },
          ],
          link: "https://www.postgresql.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Prisma",
            },
          ],
          link: "https://www.prisma.io",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Zod",
            },
          ],
          link: "https://zod.dev",
        },
      ],
      name: "Languages",
    },
    {
      items: [
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Joomla",
            },
          ],
          link: "https://www.joomla.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "WordPress",
            },
          ],
          link: "https://wordpress.com",
        },
        {
          content: [
            { hasLeftMargin: true, hasRightMargin: false, text: "Tortoise" },
            {
              hasLeftMargin: true,
              hasRightMargin: false,
              text: "SVN",
              title: "Subversion",
            },
          ],
          link: "https://tortoisesvn.net",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Git",
            },
          ],
          link: "https://git-scm.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "GitHub",
            },
          ],
          link: "https://github.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "GitHub Actions",
            },
          ],
          link: "https://github.com/features/actions",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "GitLab",
            },
          ],
          link: "https://about.gitlab.com/",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "GitLab Pipelines",
            },
          ],
          link: "https://docs.gitlab.com/ee/ci/pipelines",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Husky",
            },
          ],
          link: "https://github.com/typicode/husky",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Fork",
            },
          ],
          link: "https://git-fork.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Docker",
            },
          ],
          link: "https://www.docker.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Visual Studio Code",
            },
          ],
          link: "https://code.visualstudio.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "ES",
              title: "ECMA Script",
            },
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Lint",
            },
          ],
          link: "https://eslint.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Prettier",
            },
          ],
          link: "https://prettier.io",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "NPM",
              title: "Node Package Manager",
            },
          ],
          link: "https://www.npmjs.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "WampServer",
            },
          ],
          link: "https://www.wampserver.com/en",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "My" },
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "SQL",
              title: "Structured Query Language",
            },
            { hasLeftMargin: false, hasRightMargin: false, text: "Workbench" },
          ],
          link: "https://www.mysql.com/products/workbench",
        },
        {
          content: [
            { hasLeftMargin: false, hasRightMargin: false, text: "Heidi" },
            {
              hasLeftMargin: true,
              hasRightMargin: false,
              text: "SQL",
              title: "Structured Query Language",
            },
          ],
          link: "https://www.heidisql.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: true,
              text: "PHP",
              title: "Hypertext Processor",
            },
            { hasLeftMargin: false, hasRightMargin: false, text: "My Admin" },
          ],
          link: "https://www.phpmyadmin.net",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Postman",
            },
          ],
          link: "https://www.postman.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "FileZilla",
            },
          ],
          link: "https://filezilla-project.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Adobe Creative Suite",
            },
          ],
          link: "https://www.adobe.com/creativecloud.html",
        },
      ],
      name: "Development Tools",
    },
    {
      items: [
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "MIS",
              title: "Management and Information Systems",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "UML",
              title: "Unified Modeling Language",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "ISACA",
              title: "Information Systems Audit and Control",
            },
          ],
          link: "https://www.isaca.org",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Cobit 5",
            },
          ],
          link: "https://www.isaca.org/resources/cobit/cobit-5",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Technical Writing",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Swimlane Modeling",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Process Improvement",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Microsoft Visio",
            },
          ],
          link: "https://www.microsoft.com/en-us/microsoft-365/visio/flowchart-software",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Tableau",
            },
          ],
          link: "https://www.tableau.com",
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Google Analytics",
            },
          ],
        },
      ],
      name: "Analysis",
    },
    {
      items: [
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Public Speaking",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Knowledge Sharing",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Cross-Cultural Communication",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Word",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Excel",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "PowerPoint",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Outlook",
            },
          ],
        },
        {
          content: [
            {
              hasLeftMargin: false,
              hasRightMargin: false,
              text: "Teams",
            },
          ],
        },
      ],
      name: "Common",
    },
  ],
};
