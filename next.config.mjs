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
  })
);
