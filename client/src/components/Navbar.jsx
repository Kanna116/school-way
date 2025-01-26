import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const headerStyle = {
    backgroundColor: "#333",
    padding: "10px 0",
  };

  const navStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const ulStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <a href="/" style={logoStyle}>
          SchoolWay
        </a>

        <ul style={ulStyle}>
          <li>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={linkStyle}>
              About
            </a>
          </li>
          <li>
            <a href="/services" style={linkStyle}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" style={linkStyle}>
              Contact
            </a>
          </li>
        </ul>
        <div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
