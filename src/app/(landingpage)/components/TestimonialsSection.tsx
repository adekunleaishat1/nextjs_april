import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import profile from "../../../../public/images/Profile picture.png";

export default function TestimonialsSection() {
  return (
    <section className="px-4 md:px-12 py-6">
      <div className="bg-[#FBF6EA] py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Section */}
          <div className="border-r border-gray-300 pr-6">
            <p className="uppercase text-sm text-gray-500 tracking-wider mb-3">
              Testimonials
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              What people say <br /> about our blog
            </h2>
            <p className="text-gray-600 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 pl-0 md:pl-6">
            <p className="text-gray-900 text-lg leading-relaxed">
              <span className="font-semibold">Lorem ipsum dolor sit amet,</span>{" "}
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={profile}
                  alt="Jonathan Vallem"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Jonathan Vallem</p>
                  <p className="text-sm text-gray-500">New york, USA</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="p-3 rounded-full bg-white shadow text-gray-800 hover:bg-gray-100 transition">
                  <FaArrowLeft />
                </button>
                <button className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
