import Image from "next/image";
import logo1 from "../../../../public/logos/Logo 1.png";
import logo2 from "../../../../public/logos/Logo 2.png";
import logo3 from "../../../../public/logos/Logo 3.png";
import logo4 from "../../../../public/logos/Logo 4.png";
import logo5 from "../../../../public/logos/Logo 5.png";
const Featuredin = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  return (
    <section className=" px-4 md:px-12 text-center py-10">
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

export default Featuredin;
