import Link from "next/link";
const Pagination = ({ page, total, pageSize}) => {
    const totalPages = Math.ceil(total / pageSize);
    return (

        <section className="container mx-auto flex justify-center items-center my-8">
            {page > 1 ? (<Link href={`/breweries?page=${page - 1}`}>
                <button className="border border-orange-500 hover:bg-orange-600 hover:text-white text-orange-500  font-bold py-2 px-4 rounded">Previous</button>
            </Link>) : null}


            <span className="mx-2">Page {page} of {totalPages}</span>

            {page < totalPages ? (<Link href={`/breweries?page=${page + 1}`}>
                <button className="border border-orange-500 hover:bg-orange-600 hover:text-white text-orange-500  font-bold py-2 px-4 rounded ">Next</button>
            </Link>) : null}


        </section>

     );
}

export default Pagination;