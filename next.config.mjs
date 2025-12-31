/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- Tells Next.js to create a static 'out' folder
  images: {
    unoptimized: true, // <--- Mandatory for GitHub Pages
  },
  // If you are deploying to a User Page (username.github.io), leave this empty.
  // If deploying to a Project Repo (github.com/username/repo-name), you might need:
  // basePath: "/repo-name",
};

export default nextConfig;