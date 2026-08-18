import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>

      <p>
        Invalid route: <strong>{location.pathname}</strong>
      </p>

      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;