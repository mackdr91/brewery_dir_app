import addBrewery from "@/app/actions/addBrewery";
const BreweryAddForm = () => {
  return (
    <form action={addBrewery}>
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
            className="mr-2"
          />
          <label htmlFor="IPA">IPA</label>

          <input
            type="checkbox"
            id="APA"
            name="typesOfBeer"
            value="APA"
            className="mr-2"
          />
          <label htmlFor="APA">APA</label>

          <input
            type="checkbox"
            id="Lager"
            name="typesOfBeer"
            value="Lager"
            className="mr-2"
          />
          <label htmlFor="Lager">Lager</label>
          <input
            type="checkbox"
            id="Pilsner"
            name="typesOfBeer"
            value="Pilsner"
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
          className="mr-2"
        />
        <label htmlFor="isfeatured">Is Featured</label>
      </div>
      <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700 font-bold mb-2"
                >Images (Select up to 4 images)</label
              >
              <input
                type="file"
                id="images"
                name="images"
                className="border rounded w-full py-2 px-3"
                accept="image/*"
                multiple
                required
              />
            </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Brewery
        </button>
      </div>
    </form>
  );
};

export default BreweryAddForm;
