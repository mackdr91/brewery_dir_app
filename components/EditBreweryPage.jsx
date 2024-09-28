import updateBrewery from "@/app/actions/updateBrewery";
import Image from "next/image";
const EditBreweryPage = ({ brewery }) => {
  const updatedBreweryById = updateBrewery.bind(null, brewery._id);

  return (
    <form action={updatedBreweryById} encType="multipart/form-data">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          defaultValue={brewery.name}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          name="description"
          defaultValue={brewery.description}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="location"
        >
          Location
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          name="location"
          defaultValue={brewery.location}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="contact_email"
        >
          Contact Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="contact_email"
          type="text"
          name="contact_email"
          defaultValue={brewery.contact_email}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="contact_phone"
        >
          Contact Phone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="contact_phone"
          type="text"
          name="contact_phone"
          defaultValue={brewery.contact_phone}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="hours"
        >
          Hours
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hours"
          type="text"
          name="hours"
          defaultValue={brewery.hours}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="typesOfBeer"
        >
          Types Of Beer
        </label>
        <div>
          <input
            type="checkbox"
            id="IPA"
            name="typesOfBeer"
            value="IPA"
            defaultChecked={brewery.typesOfBeer.includes("IPA")}
            className="mr-2"
          />
          <label htmlFor="IPA">IPA</label>

          <input
            type="checkbox"
            id="APA"
            name="typesOfBeer"
            value="APA"
            defaultChecked={brewery.typesOfBeer.includes("APA")}
            className="mr-2"
          />
          <label htmlFor="APA">APA</label>

          <input
            type="checkbox"
            id="Lager"
            name="typesOfBeer"
            value="Lager"
            defaultChecked={brewery.typesOfBeer.includes("Lager")}
            className="mr-2"
          />
          <label htmlFor="Lager">Lager</label>
          <input
            type="checkbox"
            id="Pilsner"
            name="typesOfBeer"
            value="Pilsner"
            defaultChecked={brewery.typesOfBeer.includes("Pilsner")}
            className="mr-2"
          />
          <label htmlFor="Pilsner">Pilsner</label>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="website"
        >
          Website
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="website"
          type="text"
          name="website"
          defaultValue={brewery.website}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="isfeatured"
        >
          Featured
        </label>

        <input
          type="checkbox"
          id="isfeatured"
          name="isfeatured"
          value="true"
          defaultChecked={brewery.isfeatured}
          className="mr-2"
        />
        <label htmlFor="isfeatured">Is Featured</label>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update Brewery
        </button>
      </div>
    </form>
  );
};

export default EditBreweryPage;
