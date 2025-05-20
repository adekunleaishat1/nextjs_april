// import { FaBuilding, FaRocket, FaChartBar, FaRobot } from "react-icons/fa";
import economyimg from "../../../../public/images/economy (1).png";
import technologyimg from "../../../../public/images/cyborg.png";
import startupimg from "../../../../public/images/Icon (1).png";
import businessimg from "../../../../public/images/Icon (2).png";
import Image from "next/image";

const categories = [
  {
    title: "Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: businessimg,
    active: false,
  },
  {
    title: "Startup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: startupimg,
    active: true,
  },
  {
    title: "Economy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: economyimg,
    active: false,
  },
  {
    title: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: technologyimg,
    active: false,
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#232536]">
          Choose A Category
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`p-6 rounded-md border transition-all ${
              cat.active
                ? "bg-[#FFD050] border-transparent"
                : "bg-white border-gray-200 hover:shadow-md"
            }`}
          >
            <div className="flex justify-start items-center mb-4">
              <div className="bg-[#FBF6EA] p-3 rounded-md">
                <Image src={cat.icon} alt={cat.title} />
              </div>
            </div>
            <h3
              className={`text-lg font-bold text-center ${
                cat.active ? "text-[#232536]" : "text-[#232536]"
              }`}
            >
              {cat.title}
            </h3>
            <p
              className={`text-sm text-center mt-2 ${
                cat.active ? "text-[#232536]/70" : "text-gray-500"
              }`}
            >
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
