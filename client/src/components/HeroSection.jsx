const HeroSection = () => {
  const heroStyle = {
    background: "url('your-image-url.jpg') no-repeat center center",
    backgroundSize: "cover",
    padding: "100px 0",
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.25rem",
    marginBottom: "30px",
  };

  const buttonStyle = {
    padding: "15px 30px",
    fontSize: "1rem",
    textDecoration: "none",
    borderRadius: "5px",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007BFF",
    marginRight: "20px",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    color: "#fff",
    border: "2px solid #fff",
  };

  return (
    <section style={heroStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome to SchoolWay</h1>
        <p style={paragraphStyle}>
          Connecting Parents, Auto Drivers, and Students for a Safe and Reliable
          School Commute
        </p>

        <div>
          <a href="/signup" style={primaryButtonStyle}>
            Get Started
          </a>
          <a href="/learn-more" style={secondaryButtonStyle}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
