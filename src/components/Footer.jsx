function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--white)",
        padding: "24px 20px",
        textAlign: "center",
        color: "var(--muted)",
        fontSize: "0.85rem",
        marginTop: "auto",
      }}
    >
      <p>© {new Date().getFullYear()} TravelNest, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;