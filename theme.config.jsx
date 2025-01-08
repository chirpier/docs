export default {
  logo: <span>Docs title</span>,
  docsRepositoryBase:
    "https://github.com/sethsnel/blog-examples/tree/main/frontend/apps/nextra",
  project: {
    link: "https://github.com/sethsnel/blog-examples/tree/main/frontend/apps/nextra",
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "Docs - %s",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Docs website" />
      <meta
        property="og:description"
        content="Documentation and examples usages of service."
      />
    </>
  ),
  footer: {
    text: (
      <span>
        <a
          href="https://sethsnel.dev/"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Seth Snel
        </a>{" "}
        Docs - {new Date().getFullYear()}
      </span>
    ),
  },
  footerText: `${new Date().getFullYear()} © Chirpier.`,
};
