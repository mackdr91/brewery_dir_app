import Link from "next/link";


const BreweryCard = ({ brewery }) => {
  return (<>
    <Link href={`/breweries/${brewery._id}`}>
      <div className="w-full border border-black shadow-md max-w-xl rounded-lg flex flex-col h-full relative transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div className="flex-grow p-6 flex flex-col justify-between">
          <div className="p-4 flex-grow">
            <div className="text-left md:text-center lg:text-left mb-6">
              <div className="text-gray-600">{brewery.name}</div>
              <h3 className="text-xl font-bold">{brewery.location}</h3>
            </div>
            <div className="text-left md:text-center lg:text-left mb-4">
              <div className="font-bold">Contact:</div>
              <div className="text-gray-600">{brewery.contact_email}</div>

              <div className="text-gray-600">{brewery.contact_phone}</div>
            </div>
            <div className="text-left md:text-center lg:text-left mb-4">

              <h3 className="text-sm absolute top-[10px] right-[10px] bg-orange-600 text-white px-2 py-1 rounded">
                {brewery.hours}
                </h3>
            </div>

            <div className="text-left md:text-center lg:text-left">
              <div className="font-bold">Types of Beer:</div>
              <div className="text-gray-600">
                {brewery.typesOfBeer.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>

     </>
  );
};

export default BreweryCard;