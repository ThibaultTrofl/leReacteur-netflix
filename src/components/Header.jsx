import logo from "../assets/logo-netflix.png";

const Header = () => {
  return (
    <header>
      <div className="container header-box">
        <img src={logo} alt="Logo Netflix" />
      </div>
    </header>
  );
};

export default Header;
