'use server';
import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import { getSessionUser } from "@/utils/getSessionUser";



async function updateBrewery(brewreyId, formData) {
    await connectdb();

    const existingBrewery = await Brewery.findById(brewreyId);
    if (!existingBrewery) {
        throw new Error("Brewery not found");
    }

    const breweryData = {
        name: formData.get('name'),
        location: formData.get('location'),
        contact_email: formData.get('contact_email'),
        contact_phone: formData.get('contact_phone'),
        hours: formData.get('hours'),
        typesOfBeer: formData.getAll("typesOfBeer"),
        website: formData.get('website'),
        isfeatured: formData.get('isfeatured'),
        description: formData.get('description'),

    }
    breweryData.isfeatured = breweryData.isfeatured === 'true';

    const updatedBrewery = await Brewery.findByIdAndUpdate(brewreyId, breweryData, { new: true });
    revalidatePath('/breweries','/','layout')
    redirect(`/breweries/${updatedBrewery._id}`, RedirectType.Permanent)
}

export default updateBrewery
