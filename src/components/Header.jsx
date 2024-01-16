import "./Header.css";

function Header() {
  return (
    <header>
      <div class="logo">
        <a href="#">Recepie Mine</a>
      </div>
      <nav class="nav-container">
        <div class="nav-bar">
          <a href="">Recepies</a>
          <a href="#">Sign In</a>
          {/* <a href="#">Skills</a>
          <a href="#">Contact</a> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
