import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <div className="not-found">
        <h1>Book Not Found</h1>
        <Link to="/books" className="btn">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <section className="details-container">
      <img src={book.image} alt={book.title} />

      <div className="details-content">
        <span className="category">{book.category}</span>
        <h1>{book.title}</h1>
        <h3>By {book.author}</h3>
        <p className="rating">⭐ {book.rating} / 5</p>
        <p>{book.description}</p>

        <Link to="/books" className="btn">
          ← Back to Browse
        </Link>
      </div>
    </section>
  );
}

export default BookDetails;

// Display detailed information about a selected book