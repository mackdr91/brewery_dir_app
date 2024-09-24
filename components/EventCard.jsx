import { getSessionUser } from "@/utils/getSessionUser";
import Link from "next/link";
const EventCard = async ({ event }) => {
  const session = await getSessionUser();
  return (
    <div className="w-full border border-black  rounded-lg shadow-lg relative ">
      <div className="flex flex-col justify-between p-6 flex-grow">
        <div className="p-4">
          <div className=" lg:text-left mb-6">
            <h3 className="text-xl font-bold">{event.event_name}</h3>
          </div>
          <div className=" lg:text-left">
            <div className="font-bold">Description:</div>
            <div className="text-gray-600">{event.description}</div>
          </div>
          <div className=" lg:text-left">
            <div className="font-bold">Date:</div>
            <div className="text-gray-600">{event.date}</div>
          </div>
          <div className=" lg:text-left absolute top-[10px] right-[10px] bg-orange-600 text-white px-2 py-1 rounded ">
            <div>{event.time} - {event.end_time}</div>
          </div>
          {session && (
        <Link href={`/breweries/${event._id}/edit-event`}>
          <div className="absolute bottom-[10px] right-[10px] bg-orange-600 text-white px-2 py-1 rounded">
            <button>Edit</button>
          </div>
        </Link>
      )}

        </div>
      </div>
    </div>
  );
};

export default EventCard;
