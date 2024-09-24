const BrewDescCard = ({ brewery }) => {
  return (
    <section className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About {brewery.name}</h2>
    <article class="bg-gray-100 p-6 shadow-inner ">
      <p class="text-xl font-bold text-gray-900 mb-4">{brewery.description}</p>
    </article>
    </section>
  );
};

export default BrewDescCard;
