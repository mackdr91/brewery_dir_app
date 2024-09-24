'use server';
import connectdb from "@/config/database";
import Event from "@/models/Event";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";


async function updateEvent(eventId, formData) {
    await connectdb();

    const eventData = {
        brewery: formData.get("brewery"),
        event_name: formData.get("event_name"),
        description: formData.get("description"),
        date: formData.get("date"),
        time: formData.get("time"),
        end_time: formData.get("end_time"),
    };
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, { new: true });
    revalidatePath(`/breweries/${eventData.brewery}`);
    redirect(`/breweries/${eventData.brewery}`);
}

export default updateEvent