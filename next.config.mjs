import nextra from "nextra";
const withNextra = nextra({
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/",
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  output: "standalone",
});
