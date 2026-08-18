import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const books = useSelector((state) => state.books);
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    const searchText = search.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section browse-page">
      <h1>{category ? `${category} Books` : "Browse Books"}</h1>

      <input
        className="search-bar"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="no-books">No books found.</p>
        )}
      </div>
    </section>
  );
}

export default BrowseBooks;

// Browse and search books by category