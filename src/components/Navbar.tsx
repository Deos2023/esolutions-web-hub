import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            alt="ESOLUTIONS Logo"
            className="w-10 h-10"
            src="/lovable-uploads/f672c2dd-6a7a-4a27-99f2-3f284b05d58f.png"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-esolutions-blue">
              ESOLUTION
            </span>
            <span className="text-xs text-esolutions-darkGray">
              Multiple Tax Solution Provider
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-esolutions-darkBlue hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="font-medium hover:text-esolutions-red transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="font-medium hover:text-esolutions-red transition-colors"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-esolutions-red transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className="font-medium hover:text-esolutions-red transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="font-medium hover:text-esolutions-red transition-colors"
          >
            Contact
          </Link>
          <a
            href="tel:9831641953"
            className="flex items-center gap-1 bg-esolutions-blue text-white px-4 py-2 rounded-md hover:bg-esolutions-purple transition-colors"
          >
            <Phone size={16} />
            <span>9831641953</span>
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            <Link
              to="/"
              className="py-2 font-medium hover:text-esolutions-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="py-2 font-medium hover:text-esolutions-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="py-2 font-medium hover:text-esolutions-red"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="py-2 font-medium hover:text-esolutions-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="py-2 font-medium hover:text-esolutions-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:9831641953"
              className="flex items-center justify-center gap-2 bg-esolutions-blue text-white py-2 rounded-md hover:bg-esolutions-purple transition-colors"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
