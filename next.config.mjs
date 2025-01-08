import createNextIntlPlugin from "next-intl/plugin";
import nextra from "nextra";
const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/",
  defaultShowCopyCode: true,
  readingTime: true,
});

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(
  withNextra({
    reactStrictMode: true,
    output: "standalone",
    images: {
      unoptimized: true,
    },
    webpack: (config, { isServer }) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };

      return config;
    },
    productionBrowserSourceMaps: false,
  })
);
