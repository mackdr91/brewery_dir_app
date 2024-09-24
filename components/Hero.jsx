import Button from "./Button";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
    <div className="container m-auto max-w-2xl py-24">
      <div className="text-center">
        <h1 className="text-4xl text-black md:text-6xl font-bold mb-4 opacity-0 animate-fade-in-up delay-200">
          Welcome to Brews
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-0 animate-fade-in-up delay-300">
          Find the perfect brew for you.
        </p>
        <Button
          className="opacity-0 animate-fade-in-up delay-400"
          link="/breweries">Get Started</Button>
      </div>
    </div>
  </section>
  );
};

export default Hero;
