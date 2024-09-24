'use server'

import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";


async function addBrewery(formData) {
    await connectdb();
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

    const newBrewery = new Brewery(breweryData);
    await newBrewery.save();
    revalidatePath('/breweries','/','layout')
    redirect(`/breweries/${newBrewery._id}`, RedirectType.Permanent)
}

export default addBrewery