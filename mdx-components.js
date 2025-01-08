import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

const docsComponents = getDocsMDXComponents();

export const useMDXComponents = (components) => ({
  ...docsComponents,
  ...components,
  h1: ({ children, ...props }) => (
    <h1
      style={{
        fontSize: "28px",
        lineHeight: "2.5rem",
        fontWeight: "600",
        color: "#556668",
        marginBottom: "1.5rem",
        marginTop: "1.5rem",
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
        color: "#556668",
      }}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      style={{
        fontSize: "16px",
        lineHeight: "1.75rem",
        fontWeight: "500",
        color: "#556668",
        marginBottom: "1rem",
        marginTop: "1rem",
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
        color: "#556668",
        marginBottom: "1rem",
        marginTop: "1rem",
      }}
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p
      style={{
        fontSize: "15px",
        lineHeight: "1.85rem",
        fontWeight: "300",
        color: "rgb(104, 121, 124)",
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
        color: "#4E6884",
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
        fontWeight: "300",
        color: "rgb(104, 121, 124)",
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
        fontWeight: "300", 
        color: "rgb(104, 121, 124)",
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
        fontWeight: "300",
        color: "rgb(104, 121, 124)",
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
        borderTop: "1px solid rgb(229, 231, 235)",
        marginTop: "2rem",
        marginBottom: "2rem"
      }}
      {...props}
    />
  ),
});
