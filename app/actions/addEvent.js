"use server";
import connectdb from "@/config/database";
import Event from "@/models/Event";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

async function addEvent(formData) {
  await connectdb();

  const eventData = {
    brewery: formData.get("brewery"),
    event_name: formData.get("event_name"),
    description: formData.get("description"),
    date: formData.get("date"),
    time: formData.get("time"),
    end_time: formData.get("end_time"),
  };

  console.log("Received event data:", eventData);
  // Validate required fields
  if (
    !eventData.brewery ||
    !eventData.event_name ||
    !eventData.description ||
    !eventData.date ||
    !eventData.time||
    !eventData.end_time
  ) {
    throw new Error("All fields are required.");
  }



  const newEvent = new Event(eventData);
  await newEvent.save();

  // Revalidate the brewery's page to include the new event
  revalidatePath(`/breweries/${eventData.brewery}`);
  // Redirect to the brewery's page after adding the event
  redirect(`/breweries/${eventData.brewery}`); // Using Temporary Redirect (307)
}
export default addEvent;
