import nextra from "nextra";
const withNextra = nextra({
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/src",
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  output: "standalone",
});
