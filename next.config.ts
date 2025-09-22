import type { NextConfig } from "next";

const repo = "tech-workshop-1";

module.exports = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

const nextConfig: NextConfig = {
    output: "export",
    basePath: `/${repo}`,
    assetPrefix: `/${repo}`,
};

export default nextConfig;