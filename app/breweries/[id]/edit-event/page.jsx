import connectdb from "@/config/database";
import Event from "@/models/Event";
import { convertToSerializedObject } from "@/utils/convertToObject";
import mongoose from "mongoose";
import Brewery from "@/models/Brewery";
import EditEventForm from "@/components/EditEventForm";

const EditEventPage = async ({ params }) => {
    const { id } = params;
    await connectdb();
    const eventDoc = await Event.findById(id).lean();
    const breweryDoc = await Brewery.findById(eventDoc.brewery).lean();
    if (!eventDoc) {
        return (
            <h1 className="text-3xl font-bold text-center mt-10">
                Event not found
            </h1>
        );
    }
    if (!breweryDoc) {
        return (
            <h1 className="text-3xl font-bold text-center mt-10">
                Brewery not found
            </h1>
        );
    }
    const event = convertToSerializedObject(eventDoc);
    const brewery = convertToSerializedObject(breweryDoc);
    return (
        <div>
            <EditEventForm event={event} breweryId={brewery._id} breweryName={brewery.name} />
        </div>
     );
}

export default EditEventPage;