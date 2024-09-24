import { getSessionUser } from "@/utils/getSessionUser";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaClock, FaMapMarker, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

const BreweryHeader = async ({ brewery, className }) => {
  const session = await getSessionUser();

  return (
    <section className="min-h-96 flex flex-col items-center justify-center border border-black rounded-md shadow-lg m-5 relative">
    <div className="mx-auto px-2 lg:px-8 opacity-0 animate-fade-in-up delay-200">
      <h1 className="text-5xl text-center font-bold mb-6">{brewery.name}</h1>
    </div>

    <div className="flex flex-col items-center max-w-7xl px-2 opacity-0 animate-fade-in-up delay-300 lg:px-8 lg:text-center xl:text-center">
      {/* Location */}
      <p className="flex items-center mb-2">
        <FaMapMarker className="mr-2 text-gray-700" />
        <a href={`https://www.google.com/maps/search/?api=1&query=${brewery.location}`} target="_blank" className="text-indigo-600 font-medium hover:underline">
          <span className="text-gray-700">{brewery.location}</span>
        </a>
      </p>

      {/* Hours */}
      <p className="flex items-center mb-2">
        <FaClock className="mr-2 text-gray-700" />
        <span className="text-gray-700">{brewery.hours}</span>
      </p>

      {/* Website */}
      <p className="flex items-center mb-2">
        <FaGlobe className="mr-2 text-gray-700" />
        <a href={brewery.website} target="_blank" className="text-indigo-600 font-medium hover:underline">
          <span className="text-gray-700">{brewery.website}</span>
        </a>
      </p>

      {/* Email */}
      <p className="flex items-center mb-2">
        <FaEnvelope className="mr-2 text-gray-700" />
        <a href={`mailto:${brewery.contact_email}`} className="text-indigo-600 font-medium hover:underline">
          <span className="text-gray-700">{brewery.contact_email}</span>
        </a>
      </p>

      {/* Phone */}
      <p className="flex items-center mb-2">
        <FaPhone className="mr-2 text-gray-700" />
        <a href={`tel:${brewery.contact_phone}`} className="text-indigo-600 font-medium hover:underline">
          <span className="text-gray-700">{brewery.contact_phone}</span>
        </a>
      </p>
    </div>

    {session && (
      <div className="absolute top-2 right-2 flex space-x-2">
        <Link href={`/breweries/${brewery._id}/edit`}>
          <div className="bg-orange-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-orange-700 transition-colors">
            <span className="font-semibold">Edit</span>
          </div>
        </Link>
        <Link href={`/breweries/${brewery._id}/add-event`}>
          <div className="bg-green-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-green-700 transition-colors">
            <span className="font-semibold">Add Event</span>
          </div>
        </Link>
      </div>
    )}
  </section>
  );
};

export default BreweryHeader;
