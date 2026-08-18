import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);

  const categories = ["Fiction", "Sci-Fi", "Self Help", "History"];

  return (
    <>
      <section className="hero">
        <h1>Welcome to BookVerse Library</h1>
        <p>Discover amazing books, explore new ideas and grow your knowledge.</p>

        <Link to="/books" className="btn">
          Explore Books
        </Link>
      </section>

      <section className="section">
        <h2>Browse Categories</h2>

        <div className="categories">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${encodeURIComponent(category)}`}
              className="category-box"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Popular Books</h2>
          <Link to="/books">View All →</Link>
        </div>

        <div className="books-grid">
          {books.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;

// Home page of the BookVerse Library