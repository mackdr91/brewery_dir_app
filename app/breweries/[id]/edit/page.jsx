import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import EditBreweryPage from "@/components/EditBreweryPage";
import { convertToSerializedObject } from "@/utils/convertToObject";
import mongoose from "mongoose";


const EditBrewery = async ({ params }) => {
  await connectdb();

  // Validate the ID
  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return (
      <h1 className="text-3xl font-bold text-center mt-10">
        Invalid project ID
      </h1>
    );
  }

  const breweryDoc = await Brewery.findById(params.id).lean();
  if (!breweryDoc) {
    return (
      <h1 className="text-3xl font-bold text-center mt-10">
        Brewery not found
      </h1>
    );
  }

  const brewery = convertToSerializedObject(breweryDoc);

  return (
    <section>
      <div className="container m-auto max-w-2xl py-24">
        <div className=" px-6 py-8 rounded-lg shadow-md border m-4 md:m-0">

          <EditBreweryPage brewery={brewery} />

        </div>
      </div>
    </section>
  );
};

export default EditBrewery;