'use server';

import Event from "@/models/Event";
import { revalidatePath } from "next/cache";

export async function deleteEvent(formData) {
  const eventId = formData.get('eventId');

  if (!eventId) {
    return { success: false, error: "Event ID is missing" };
  }

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    await Event.deleteOne({ _id: eventId });
    revalidatePath(`/breweries/${event.brewery}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting brewery:", error);
    return { success: false, error: error.message };
  }
}