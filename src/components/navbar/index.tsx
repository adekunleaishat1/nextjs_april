import Image from "next/image";
import logo from "../../../public/images/Logo.png";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#232536] h-[80px]  flex justify-center items-center ">
        <div className="w-[1440px] mx-auto  flex justify-between items-center px-[50px]">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>

          <div className="hidden md:flex justify-around items-center w-[50%]">
            <Link href="/" className="text-[#FFFFFF] text-[16px] ">
              Home
            </Link>
            <Link href="/blog" className="text-[#FFFFFF] text-[16px] ">
              Blog
            </Link>
            <Link href="/about" className="text-[#FFFFFF] text-[16px] ">
              About Us
            </Link>
            <Link href="" className="text-[#FFFFFF] text-[16px] ">
              Contact Us
            </Link>
            <button className="bg-[#ffff] px-6 py-3 rounded-md text-[18px] font-bold leading-[24px]">
              Subscribe
            </button>
          </div>

          <div className="block md:hidden">
            <CiMenuFries className="text-[#fff] text-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
