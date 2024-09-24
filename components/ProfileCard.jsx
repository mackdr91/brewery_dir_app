import Image from "next/image";
import image from "@/public/images/domonick.png";

const ProfileCard = () => {
  return (
    <section className=" flex flex-col justify-center items-center  py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Developer</h2>
      <div className="w-full max-w-[300px] p-10 bg-white border border-gray-200 rounded-lg shadow-md light:bg-white dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <Image
            src={image}
            alt="Domonick Mack"
            className="mb-3 w-32 h-32 rounded-full shadow-lg"
            width={128}
            height={128}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 light:text-black">
            Domonick Mack
          </h5>
          <span className="text-sm text-gray-500 light:text-gray-400">
            Developer & Creator of Brew
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
