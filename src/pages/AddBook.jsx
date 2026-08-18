import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.rating ||
      !form.description
    ) {
      setError("Please fill all required fields.");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...form,
      rating: Number(form.rating),
      image:
        form.image ||
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    };

    dispatch(addBook(newBook));

    navigate("/books");
  };

  return (
    <section className="form-section">
      <form className="book-form" onSubmit={handleSubmit}>
        <h1>Add a New Book</h1>

        {error && <p className="error">{error}</p>}

        <input
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Self Help">Self Help</option>
          <option value="History">History</option>
        </select>

        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          step="0.1"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Book Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default AddBook;

// Form for adding a new book to the library