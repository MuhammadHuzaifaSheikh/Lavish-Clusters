import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen pt-20 lg:pt-28"
      style={{
        backgroundImage: 'url(/assets/img/home-8/background.png)', // Ensure the background image exists in public/assets/img/home-8
      }}
    >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className="container mx-auto py-20 lg:py-36 px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 text-left">
          <span className="text-sm font-medium text-gray-500 uppercase">
            Creating For The Future
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Empowering Your <span className="text-blue-600">Digital</span> Presence
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            We provide innovative digital solutions that help businesses thrive
            in an ever-changing digital world. Explore our modern approach to
            software, web, and mobile app development.
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <Link href="/about" legacyBehavior>
              <a className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition duration-300">
                Discover More
              </a>
            </Link>
            <Link href="/how-we-work" legacyBehavior>
              <a className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <FaPlay />
                <span>how we work</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Right content: Image illustration */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
          <img
            src="/assets/img/home-8/phone-mockup.png" // Ensure this path is correct and file exists
            alt="Phone Mockup"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
