
import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import BreweryCard from "@/components/BreweryCard";
import Pagination from "@/components/Pagination";
import { deleteBrewery } from "@/app/actions/deleteBrewery";
import { getSessionUser } from "@/utils/getSessionUser";

const BreweriesPage = async ({ searchParams: { page = 1, pageSize = 5 } }) => {
  const session = await getSessionUser();
  await connectdb();
  const breweries = await Brewery.find({}).lean();
  // Ensure page and pageSize are numbers
  const currentPage = parseInt(page, 10);
  const size = parseInt(pageSize, 10);

  const totalBreweries = breweries.length;
  const startIndex = (currentPage - 1) * size;

  // Use slice to paginate breweries
  const paginatedBreweries = breweries.slice(startIndex, startIndex + size);

  // Show pagination if total breweries exceed page size
  const showPagination = totalBreweries > size;

  return (
    <section className="px-4 py-6">
    <div className="opacity-0 animate-fade-in-up delay-200">
      <h2 className="text-5xl text-center font-bold mb-6">Breweries</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {paginatedBreweries.map((brewery) => (
        <div key={brewery._id} className="relative">
          <BreweryCard brewery={brewery} />
          {session && (
          <form action={deleteBrewery}>
            <input type="hidden" name="breweryId" value={brewery._id} />
            <button
              type="submit"
              className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </form>
          )}
        </div>
      ))}
    </div>

    {showPagination && (
      <Pagination page={currentPage} total={totalBreweries} pageSize={size} />
    )}
  </section>
  );
};

export default BreweriesPage;
