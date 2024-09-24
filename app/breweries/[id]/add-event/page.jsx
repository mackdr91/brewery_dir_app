import EventAddForm from "@/components/EventAddForm";
import Brewery from "@/models/Brewery";
import connectdb from "@/config/database";
import { convertToSerializedObject } from "@/utils/convertToObject";
const EventAddPage = async ({ params }) => {

    const { id }= params;
    await connectdb();
    const breweryDoc = await Brewery.findById(id).lean();

    if (!breweryDoc) {
      return (
        <h1 className="text-3xl font-bold text-center mt-10">
          Sorry, there is nothing here
        </h1>
      );
    }

    const brewery = convertToSerializedObject(breweryDoc);


  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="container m-auto max-w-2xl py-10">
      <h1 className="text-3xl font-bold text-center mt-10">Add Event</h1>
        <EventAddForm breweryId={id} breweryName={brewery.name} />
      </div>
    </section>
  );
};

export default EventAddPage;
