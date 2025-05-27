import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../public/images/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#232536] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            {/* <h1 className="text-2xl font-bold mb-4">{`{Finsweet}`}</h1>
             */}
            <Image src={logo} alt="finsweet" />
          </div>

          <ul className="flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="bg-[#2e3040] h-[256px] px-8 rounded-md grid grid-cols-1 items-center md:grid-cols-2 gap-6">
          <h2 className="text-xl md:text-[32px] md:leading-[48px] font-semibold ">
            Subscribe to our news letter to get latest updates and news
          </h2>

          <form className="flex flex-col sm:flex-row gap-4 items-start sm:items-center ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-3 w-full sm:w-auto flex-1 rounded border border-gray-500 bg-transparent placeholder-gray-300 focus:outline-none"
            />
            <button className="bg-[#FFD050]  text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </form>
        </div>

        <div className="block md:flex justify-between ">
          <div>
            <p className="text-sm text-gray-300">
              Finstreet 118 2561 Fintown
              <br />
              Hello@finsweet.com &nbsp;&nbsp; 020 7993 2905
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-6 text-gray-300 text-lg">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
