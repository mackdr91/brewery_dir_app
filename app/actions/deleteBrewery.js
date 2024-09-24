'use server';

import Brewery from "@/models/Brewery";
import { revalidatePath } from "next/cache";

export async function deleteBrewery(formData) {
  const breweryId = formData.get('breweryId');

  if (!breweryId) {
    return { success: false, error: "Brewery ID is missing" };
  }

  try {
    const brewery = await Brewery.findById(breweryId);
    if (!brewery) {
      throw new Error("Brewery not found");
    }

    await Brewery.deleteOne({ _id: breweryId });
    revalidatePath("/breweries");
    return { success: true };
  } catch (error) {
    console.error("Error deleting brewery:", error);
    return { success: false, error: error.message };
  }
}