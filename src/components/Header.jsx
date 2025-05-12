const Header = (props) => {
  return (
    <header className="header-component">
      <div className="container">
        <img src={props.imageSrc} alt="IC Tech Logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Profile</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
