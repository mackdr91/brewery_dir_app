import ProfileCard from "@/components/ProfileCard";
const AboutPage = () => {
  return (
    <>
   <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-12">
  <div className="container mx-auto text-center">
    <h1 className="text-5xl font-extrabold text-gray-800 mb-6 opacity-0 animate-fade-in-up delay-200">About Brew</h1>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-200">
      Welcome to <span className="text-blue-600 font-semibold">Brew</span>, your ultimate guide to craft breweries. At Brew, we believe every sip tells a story. Whether you're a seasoned beer connoisseur or new to craft brewing, we're here to connect you with the best breweries, and help you discover unique flavors and experiences.
    </p>
  </div>
</section>

<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
    <p className="text-lg text-gray-600 mb-8">
      <span className="font-semibold">Brew</span> started with a passion for craft beer and curiosity to explore the exciting world of local breweries. As we visited more breweries, we realized the need for a one-stop platform where beer lovers can find detailed information, special brews, and events.
    </p>
    <p className="text-lg text-gray-600 mb-8">
      From our first sip of a locally brewed IPA to a tour of a small-town brewery, we were hooked—and wanted to share that excitement with you. <span className="font-semibold">Brew</span> was born to make it easier for people to find great beer, support local breweries, and explore the growing craft beer community.
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
    <ul className="space-y-4">
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Discover Local Breweries:</strong> Find breweries near you or explore new ones in different cities.</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Stay Up to Date:</strong> Learn about brewery events, seasonal beer releases, and exclusive tastings.</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Support Craft Breweries:</strong> Connect with local breweries and experience the artisans behind the craft beer movement.</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Share Your Experience:</strong> Leave reviews, see what others are saying, and join the community that celebrates brewing.</span>
      </li>
    </ul>
  </div>
</section>

<section className="bg-gradient-to-r from-orange-50 to-orange-50 py-16">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
    <p className="text-lg text-gray-600 mb-8">
      Our vision is to become the leading platform for discovering and celebrating craft beer. With each brewery added and each story shared, we're contributing to a world where local brewers thrive and beer lovers always find something new.
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Brew?</h2>
    <ul className="space-y-4">
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Curated Brewery Listings:</strong> Each brewery is handpicked to ensure you experience the best of craft beer.</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Detailed Brewery Profiles:</strong> Learn about the history, specialties, and offerings of each brewery.</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Events and Happenings:</strong> Stay in the loop with upcoming brewery events, beer festivals, and more.</span>
      </li>
    </ul>
  </div>
</section>

<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Join the Brew Community</h2>
    <p className="text-lg text-gray-600 mb-8">
      At <span className="font-semibold">Brew</span>, we don’t just love craft beer—we live it. Join us as we explore the flavors, stories, and people behind every brewery. Whether you’re looking for the perfect pint or eager to share your own experiences, <span className="font-semibold">Brew</span> connects you to the vibrant world of craft beer.
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
    <ul className="space-y-4">
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Support Local:</strong> We prioritize local breweries and believe in supporting small businesses.</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Celebrate Craftsmanship:</strong> We appreciate the artistry and dedication that goes into every batch of beer.</span>
      </li>
      <li className="flex items-start space-x-3">
        <span className="w-4 h-4 rounded-full bg-orange-200 mt-1"></span>
        <span className="text-lg text-gray-600"><strong>Community First:</strong> We aim to build a community of beer lovers who share their experiences and help each other discover new favorites.</span>
      </li>
    </ul>
  </div>
</section>

      <ProfileCard />
    </>
  );
};

export default AboutPage;
