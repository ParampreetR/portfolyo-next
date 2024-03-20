import path from "fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/components", "./src/sass"],
  },
};

export default nextConfig;
