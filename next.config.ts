import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

// The GitHub repo name — must match exactly for GitHub Pages to serve assets correctly
const REPO_NAME = "portfolio";

// GitHub Pages routing:
// - If your repo is "portfolio" (project site), set basePath to "/portfolio"
const nextConfig: NextConfig = {
  // GitHub Pages: static HTML export (no server required)
  output: "export",

  // GitHub Pages: sets basePath when deploying to github.io/repo-name
  // - If your repo is "nawaz-khan-droid.github.io" (user site), leave basePath empty
  // - If your repo is "portfolio" (project site), set basePath to "/portfolio"
  basePath: isGitHubPages ? `/${REPO_NAME}` : "",

  // Expose basePath to client components so they can build correct asset URLs
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${REPO_NAME}` : "",
  },

  // Static export: disable server-side image optimization
  images: {
    unoptimized: true,
  },

  // Static export: trailing slashes for GitHub Pages compatibility
  trailingSlash: true,

  reactStrictMode: false,

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
