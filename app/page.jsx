import Hero from "@/components/Hero";

import connectdb from "@/config/database";
const HomePage = () => {
  connectdb();
  console.log(process.env.MONGODB_URI);
  console.log("connected");
  return (
    <div>
      <Hero />
    </div>
  );
};

export default HomePage;
