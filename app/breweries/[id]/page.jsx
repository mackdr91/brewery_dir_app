import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import Event from "@/models/Event";
import { convertToSerializedObject } from "@/utils/convertToObject";
import BreweryHeader from "@/components/BreweryHeader";
import EventCard from "@/components/EventCard";
import BreweryMap from "@/components/BreweryMap";
import { deleteEvent } from "@/app/actions/deleteEvent";
import { getSessionUser } from "@/utils/getSessionUser";
import BrewDescCard from "@/components/BrewDescCard";
import BreweryImages from "@/components/BreweryImages";

const BreweryPage = async ({ params }) => {
  const session = await getSessionUser();

  await connectdb();
  const breweryDoc = await Brewery.findById(params.id).lean();

  const brewery = convertToSerializedObject(breweryDoc);

  const breweryEvents = await Event.find({ brewery: params.id }).lean();

  if (!brewery) {
    <h1 className="font-bold text-3xl text-center mt-10">
      Sorry, there is nothing here
    </h1>;
  }
  return (
    <>
      <BreweryHeader brewery={brewery} className="relative" />
      <BrewDescCard brewery={brewery} />
      <section className="mx-auto max-w-7xl px-2 lg:px-8 mt-5 mb-5">
        <div className="grid grid-cols-1 gap-4 w-full">
          {breweryEvents.map((event) => (
            <div key={event._id} className="relative">
              <EventCard event={event} />
              {session && (
                <form action={deleteEvent}>
                  <input type="hidden" name="eventId" value={event._id} />
                  <button
                    type="submit"
                    className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      </section>
      {/*<BreweryImages images={brewery.images} />*/}
      <section className="w-full h-full mt-10">
        <BreweryMap brewery={brewery} />
      </section>
    </>
  );
};

export default BreweryPage;
