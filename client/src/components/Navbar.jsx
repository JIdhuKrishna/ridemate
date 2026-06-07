import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-black/20
      backdrop-blur-2xl
      border-b border-white/10
    "
    >
      <div
        className="
        max-w-7xl mx-auto
        px-8 py-4
        flex items-center justify-between
      "
      >
        {/* Logo */}
        <Link
          to="/dashboard"
          className="
          text-2xl font-bold
          text-orange-400
        "
        >
          🏍 RideMate
        </Link>

        {/* Navigation */}
        <div className="flex gap-8 text-gray-300">
          <Link
            to="/dashboard"
            className="hover:text-orange-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/rides"
            className="hover:text-orange-400 transition"
          >
            Rides
          </Link>

          <Link
            to="/navigation"
            className="hover:text-orange-400 transition"
          >
            Navigation
          </Link>

          <Link
            to="/weather"
            className="hover:text-orange-400 transition"
          >
            Weather
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="
            h-10 w-10
            rounded-full
            bg-white/10
            backdrop-blur-xl
          "
          >
            🔔
          </button>

          <button
            onClick={logout}
            className="
            px-4 py-2
            rounded-xl
            bg-orange-500
            hover:bg-orange-600
            transition
          "
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}