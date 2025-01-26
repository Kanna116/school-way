const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const linkStyle = {
    color: "#fff",
    marginRight: "20px",
  };

  const socialLinkStyle = {
    color: "#fff",
    marginRight: "10px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; 2025 SchoolWay. All rights reserved.</p>
        <div>
          <a href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </a>
          <a href="/terms-of-service" style={linkStyle}>
            Terms of Service
          </a>
        </div>
        <div style={{ marginTop: "10px" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
