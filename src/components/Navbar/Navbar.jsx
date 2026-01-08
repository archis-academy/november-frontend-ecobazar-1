import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">

        <ul className="navbar__menu">
          <li className="active">Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className="navbar__phone">
          <span className="icon">📞</span>
          <span>(219) 555-0114</span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;