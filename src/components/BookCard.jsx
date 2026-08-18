import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />

      <div className="book-info">
        <span className="category">{book.category}</span>
        <h3>{book.title}</h3>
        <p>By {book.author}</p>
        <p className="rating">⭐ {book.rating}</p>

        <Link to={`/book/${book.id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;