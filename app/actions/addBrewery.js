'use server'

import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import cloudinary from "@/config/cloudinary";


async function addBrewery(formData) {
    await connectdb();


    const images = formData
        .getAll("images")
        .filter(image => image !== "");

    const typesOfBeer = formData.getAll("typesOfBeer");
    const breweryData = {
        name: formData.get('name'),
        location: formData.get('location'),
        contact_email: formData.get('contact_email'),
        contact_phone: formData.get('contact_phone'),
        hours: formData.get('hours'),
        typesOfBeer,
        website: formData.get('website'),
        description: formData.get('description'),


    }

    const imageUrls = []

    for (const imageFile of images) {
        const imageBuffer = await imageFile.arrayBuffer();
        const imageArray = Array.from(new Uint8Array(imageBuffer));
        const imageData = Buffer.from(imageArray);

        const imageBase64 = imageData.toString('base64');
        const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${imageBase64}`, {
            folder: 'scbrew_io/breweries'
        });

        imageUrls.push(result.secure_url);
    }

    breweryData.images = imageUrls;

    const newBrewery = new Brewery(breweryData);
    await newBrewery.save();
    revalidatePath('/breweries','/','layout')
    redirect(`/breweries/${newBrewery._id}`)
}

export default addBrewery