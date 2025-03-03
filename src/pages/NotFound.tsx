
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto px-4 animate-fade-in">
        <h1 className="text-7xl font-bold text-criptex-600 mb-6">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-criptex-600 hover:bg-criptex-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-criptex-500"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
