const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://lanrecodes.com";

export const siteConfig = {
  name: "lanres-portfolio",
  title: "Lanre Popoola - Software Engineer",
  description:
    "Here's my digital garden, where I grow my thoughts and projects.",
  default_image: "/images/profile.png", // Updated path
  url: "https://lanrecodes.com",
  theme_color: "#1a1a1a",
  keywords: [
    "Software Engineer",
    "Golang",
    "Typescript",
    "Web3",
    "Solidity",
    "Zig",
    "Rust",
    "Python",
    "Node.js",
    "Bun",
    "Mongodb",
    "SQL",
    "E-commerce",
    "Shopify",
    "Cloud Engineering",
    "Debugging",
    "Problem solving",
    "A.I",
    "Artificial Intelligence",
  ],
  // Helper function to get full URLs for images
  getImageUrl: (imagePath: string) => {
    if (imagePath.startsWith("http")) return imagePath;
    return `${baseUrl}${imagePath}`;
  },
};
