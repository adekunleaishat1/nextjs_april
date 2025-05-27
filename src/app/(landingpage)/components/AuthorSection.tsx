import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import author1 from "../../../../public/images/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png";
import author2 from "../../../../public/images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png";
import author3 from "../../../../public/images/fashion-woman-cute-shoes-5704849.png";
import author4 from "../../../../public/images/content-baker-with-delicious-puff-in-cafeteria-6205509.png";
import logo1 from "../../../../public/logos/Logo 1.png";
import logo2 from "../../../../public/logos/Logo 2.png";
import logo3 from "../../../../public/logos/Logo 3.png";
import logo4 from "../../../../public/logos/Logo 4.png";
import logo5 from "../../../../public/logos/Logo 5.png";
const authors = [
  {
    name: "Floyd Miles",
    role: "Content Writer @Company",
    img: author1,
    bg: "bg-gray-100",
  },
  {
    name: "Dianne Russell",
    role: "Content Writer @Company",
    img: author2,
    bg: "bg-yellow-50",
  },
  {
    name: "Jenny Wilson",
    role: "Content Writer @Company",
    img: author3,
    bg: "bg-gray-100",
  },
  {
    name: "Leslie Alexander",
    role: "Content Writer @Company",
    img: author4,
    bg: "bg-gray-100",
  },
];

const logos = [logo1, logo2, logo3, logo4, logo5];

const AuthorSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
        List of Authors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {authors.map((author, index) => (
          <div
            key={index}
            className={`${author.bg} rounded-lg p-6 flex flex-col items-center text-center`}
          >
            <div className="w-24 h-24 relative mb-4">
              <Image
                src={author.img}
                alt={author.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {author.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{author.role}</p>
            <div className="flex gap-4 text-gray-600 text-lg justify-center">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between ">
        <div className="text-left   text-gray-600 font-medium ">
          <span className="text-sm uppercase">We are</span>
          <div className="text-lg font-bold">Featured in</div>
        </div>

        <div className="flex flex-wrap justify-between items-center w-[1000px] ">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-24 h-6 relative grayscale opacity-80 hover:opacity-100"
            >
              <Image
                src={logo}
                alt={`logo-${idx}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
