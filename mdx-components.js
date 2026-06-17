import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

const docsComponents = getDocsMDXComponents();

const iconMap = {
  rocket: {
    bg: "linear-gradient(135deg, #fff5d6 0%, #ffe7a3 100%)",
    border: "#f3cf72",
    glyph: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19c2.5-1 4-2.5 5-5" />
        <path d="M15 9l-6 6" />
        <path d="M14 4c3.5 0 6 2.5 6 6-2 3-5 5-8 6l-4-4c1-3 3-6 6-8Z" />
        <path d="M4 20c0-2 1-4 3-5" />
      </svg>
    ),
  },
  claw: {
    bg: "linear-gradient(135deg, #dff6eb 0%, #bce7d0 100%)",
    border: "#92cfaf",
    glyph: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14c-1.5-1.5-2-3.5-1-5.5" />
        <path d="M12 16c-1.2-1.7-1.5-3.8-.7-5.8" />
        <path d="M16 14c-.2-2 .4-4 1.8-5.5" />
        <path d="M6 18c3-1 9-1 12 0" />
      </svg>
    ),
  },
  compass: {
    bg: "linear-gradient(135deg, #ddeafc 0%, #bfd6f5 100%)",
    border: "#9bbce8",
    glyph: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M15.5 8.5 14 14l-5.5 1.5L10 10l5.5-1.5Z" />
      </svg>
    ),
  },
};

const PathGrid = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "1rem",
      marginTop: "1.25rem",
      marginBottom: "1.75rem",
    }}
  >
    {children}
  </div>
);

const PathCard = ({ href, title, description, icon = "compass" }) => {
  const iconSpec = iconMap[icon] || iconMap.compass;
  return (
    <a
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        border: "1px solid hsl(var(--chirrop-card-border) / 0.9)",
        borderRadius: "18px",
        padding: "1rem",
        background: "linear-gradient(180deg, hsl(40 30% 99%) 0%, hsl(40 24% 98%) 100%)",
        boxShadow: "var(--chirrop-shadow-md)",
      }}
    >
      <div
        style={{
          width: "2.25rem",
          height: "2.25rem",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "0.75rem",
          background: iconSpec.bg,
          border: `1px solid ${iconSpec.border}`,
          color: "#23415f",
        }}
      >
        {iconSpec.glyph}
      </div>
      <div style={{ fontSize: "1rem", fontWeight: 600, color: "hsl(var(--chirrop-foreground))", marginBottom: "0.35rem" }}>{title}</div>
      <div style={{ fontSize: "0.95rem", lineHeight: "1.55rem", color: "hsl(var(--chirrop-muted-foreground))" }}>{description}</div>
    </a>
  );
};

export const useMDXComponents = (components) => ({
  ...docsComponents,
  ...components,
  PathGrid,
  PathCard,
  h1: ({ children, ...props }) => (
    <h1
      style={{
        fontSize: "28px",
        lineHeight: "2.5rem",
        fontWeight: "700",
        color: "hsl(var(--chirrop-foreground))",
        marginBottom: "1.5rem",
        marginTop: "1.5rem",
        fontFamily: "var(--font-mono), monospace",
      }}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      style={{
        fontSize: "22px",
        lineHeight: "2.25rem",
        fontWeight: "600",
        marginBottom: "1.25rem",
        marginTop: "1.25rem",
        color: "hsl(var(--chirrop-foreground))",
        fontFamily: "var(--font-mono), monospace",
      }}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      style={{
        fontSize: "18px",
        lineHeight: "2rem",
        fontWeight: "600",
        color: "hsl(var(--chirrop-foreground))",
        marginBottom: "1rem",
        marginTop: "1rem",
        fontFamily: "var(--font-mono), monospace",
      }}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      style={{
        fontSize: "16px",
        lineHeight: "1.5rem",
        fontWeight: "500",
        color: "hsl(var(--chirrop-foreground))",
        marginBottom: "1rem",
        marginTop: "1rem",
        fontFamily: "var(--font-mono), monospace",
      }}
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.85rem",
        fontWeight: "400",
        color: "hsl(var(--chirrop-foreground))",
        marginBottom: "0.5rem",
        marginTop: "0.5rem",
      }}
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a
      style={{
        fontSize: "15px",
        lineHeight: "1.85rem",
        fontWeight: "400",
        color: "hsl(var(--chirrop-primary))",
        marginBottom: "0.5rem",
        marginTop: "0.5rem",
      }}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul
      style={{
        fontSize: "15px",
        lineHeight: "1.85rem",
        fontWeight: "400",
        color: "hsl(var(--chirrop-foreground))",
        listStyleType: "disc",
        listStylePosition: "inside",
        marginLeft: "1rem",
        marginBottom: "1rem",
        paddingLeft: "0.5rem"
      }}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      style={{
        fontSize: "15px",
        lineHeight: "1.85rem",
        fontWeight: "400",
        color: "hsl(var(--chirrop-foreground))",
        listStyleType: "decimal",
        listStylePosition: "inside",
        marginLeft: "1rem",
        marginBottom: "1rem",
        paddingLeft: "0.5rem"
      }}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li
      style={{
        fontSize: "15px",
        lineHeight: "1.85rem",
        fontWeight: "400",
        color: "hsl(var(--chirrop-foreground))",
        marginBottom: "0.5rem",
        paddingLeft: "0.5rem",
        display: "list-item"
      }}
      {...props}
    >
      {children}
    </li>
  ),
  hr: ({ ...props }) => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid hsl(var(--chirrop-card-border) / 0.9)",
        marginTop: "2rem",
        marginBottom: "2rem"
      }}
      {...props}
    />
  ),
});
