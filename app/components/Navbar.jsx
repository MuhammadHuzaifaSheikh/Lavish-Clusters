import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-xl font-bold text-gray-800">
            AgileTech
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/service" className="text-gray-600 hover:text-gray-900">
            Service
          </Link>
          <Link href="/pages" className="text-gray-600 hover:text-gray-900">
            Pages
          </Link>
          <Link href="/mega-menu" className="text-gray-600 hover:text-gray-900">
            Mega Menu
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact Us
          </Link>
        </div>
        <Link href="/about" className="hidden md:flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
          Discover More <FaPlus className="ml-2" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
