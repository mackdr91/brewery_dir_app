'use server';
import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import { getSessionUser } from "@/utils/getSessionUser";
import cloudinary from "@/config/cloudinary";
import { Readable } from 'stream';

async function updateBrewery(breweryId, formData) {
    await connectdb();

    const existingBrewery = await Brewery.findById(breweryId);
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
        isfeatured: formData.get('isfeatured') === 'true',
        description: formData.get('description'),
    };

    
    const updatedBrewery = await Brewery.findByIdAndUpdate(breweryId, breweryData, { new: true });
    revalidatePath('/breweries', '/', 'layout');
    redirect(`/breweries/${updatedBrewery._id}`, RedirectType.Permanent);
}



export default updateBrewery;
