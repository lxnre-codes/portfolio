import { IPortfolioData } from "@/types/portfolio";

export const portfolioData: IPortfolioData = {
  personalInfo: {
    name: "LANRE POPOOLA",
    title: "Software Engineer",
    phone: "",
    emails: ["lanrepopson0@gmail.com"],
    website: "https://lanrecodes.com",
    github: "https://github.com/lxnre-codes",
    twitter: "https://x.com/lxnre_codes",
    summary:
      "Hey there! Welcome to my digital corner of the internet. Fair warning: what you're about to see is basically my resume in its Sunday best (just with better fonts and cooler animations), sometimes my thoughts & writings as well. I'm that calm, easy-going and very playful engineer who's been cooking up some pretty neat stuff on backend, blockchain and e-commerce projects . Think of me as your friendly neighborhood problem-solver, but instead of Spider-Man's web-shooters, I use golang to save the day. Shall i tell you? My main tools are critical thinking and witty jokes – though I'm told I should probably just do more of the thinking & coding part 😔 🙁 (not that my jokes are not funny, but hey!! haters gon hate, potatoes gon potate 😌🤪!!!). Agghh this is hard, but yeah that's all i can squeeze out of my brain 🧠😎...",
  },
  skills: [
    "Golang",
    "Typescript",
    "Web3 + Solidity",
    "EVM Chains",
    "Solana",
    "Node.js, Bun",
    "React, Next.js, React Native",
    "Databases - Mongodb, SQL",
    "Database design & management",
    "E-commerce development",
    "Shopify development",
    "Cloud Engineering (GCP & AWS)",
    "Debugging",
    "Problem solving",
  ],
  learning: ["Zig programming language", "Rust programming language"],
  experience: [
    {
      company: "BeSafe LLC",
      position: "Software Engineer",
      period: "2024-10",
      details: [
        "Architected and implemented a scalable distributed system infrastructure for e-hail services",
        "Built robust RESTful and GRPC APIs handling multiple concurrent requests with optimised response times.",
        "Engineered interconnected micro-services using message queues and event-driven architecture, ensuring reliable communication and data consistency across the platform's core functionalities.",
      ],
    },
    {
      company: "Oximmortals - Shopthru Inc",
      position: "Software Engineer",
      period: "2022-02 to 2024-09",
      details: [
        "Developed super efficient and reliable api servers",
        "Managed code repositories, CI/CD alongside cloud infrastructures (kubernetes, kms, cloud run, load balancers ... GCP basically)",
        "Migrated a large nodejs server to golang excellently and efficiently without breaking anything",
        "Developed and managed shopify applications",
        "Integrated blockchain functionalities into e-commerce websites with web3",
        "Built blockchain-ecommerce token gating api servers",
        "Built in-store retail discounting api servers",
        "Recommended and implemented performance improvement on api servers",
        "Collaborated with management and users to develop e-commerce strategies",
        "Created web models and prototypes including user interfaces, logical and data models",
        "Analysed user needs to determine technical requirements",
        "Researched, documented and selected alternatives for server architectures",
        "Developed and managed databases with appropriate indexing and query helpers",
        "Integrated ai solutions into api servers and ecommerce solutions",
      ],
    },
    {
      company: "0ximmortals - Yolo dao",
      position: "Web3 Developer - Freelance",
      period: "2022-01 to 2022-02",
      details: ["Integrated web3 functionalities into frontend & servers"],
    },
    {
      company: "0ximmortals - Doomsdayx",
      position: "Web3 Developer - Freelance",
      period: "2021-12 to 2022-01",
      details: [
        "Wrote gas efficient NFT smart contracts",
        "Integrated web3 functionalities into frontends & servers",
      ],
    },
    {
      company: "Creo Dao",
      position: "Web3 Developer - Freelance",
      period: "2021-10 to 2022-11",
      details: [
        "Wrote gas efficient NFTs, ERC20s and token staking/farming smart contracts",
        "Built frontend UIs",
        "Integrated web3 functionalities into frontend",
      ],
    },
  ],
  education: [
    {
      school: "University of Bradford, Bradford, United Kingdom",
      degree: "Bsc Computer science - High School Diploma",
      period: "2022-09 to 2024-04",
    },
    {
      school: "Yaba College of Technology, Lagos, Nigeria",
      degree: "Statistics & Mathematics - National Diploma",
      period: "2019-01 to 2021-07",
    },
  ],
};
