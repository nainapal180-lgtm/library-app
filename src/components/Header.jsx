import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        📚 BookVerse
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Browse Books</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
      </nav>
    </header>
  );
}

export default Header;