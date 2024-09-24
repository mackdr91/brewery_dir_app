import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";
import connectdb from "@/config/database";
import Brewery from "@/models/Brewery";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";

const AdminPage = async () => {
  const session = await getSessionUser();
  if (!session) {
    redirect("/auth/signin");
  }

  await connectdb();

  const breweries = await Brewery.find({}).lean();

  // Render the admin page with user info and sign-out button
  return (
    <>
      <section>
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl mb-6">Admin Dashboard</h1>
          <div className="flex flex-col items-center p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              Welcome, {session.user.name}!
            </h2>
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="mb-4">Email: {session.user.email}</p>

            <SignOutButton />
          </div>
        </div>
      </section>
      <section className="py-20 mb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Breweries</h2>
          <ul>
            {breweries.map((brewery) => (
              <li key={brewery._id} className="mb-2">
                <Link
                  href={`/breweries/${brewery._id}/edit`}
                  className="text-blue-500 hover:underline"
                >
                  {brewery.name}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default AdminPage;
