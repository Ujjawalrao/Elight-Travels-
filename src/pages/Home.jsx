import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Mountain,
  MapPin,
  Search,
} from "lucide-react";

const destinations = [
  {
    name: "Kashmir Valley",
    place: "Srinagar, Kashmir",
    country: "India",
    style: "nature",
    description: "Alpine lakes, quiet valleys and mountain air.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Himalayan Escape",
    place: "Manali, Himachal Pradesh",
    country: "India",
    style: "road-trip",
    description: "A slower pace among pine forests and peaks.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Waterfall Country",
    place: "Meghalaya, Northeast India",
    country: "India",
    style: "nature",
    description: "Green trails, hidden falls and open skies.",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kerala Backwaters",
    place: "Alappuzha, Kerala",
    country: "India",
    style: "weekend",
    description: "A peaceful journey through tropical waterways.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  const [location, setLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [tripType, setTripType] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const [matchingDestinations, setMatchingDestinations] = useState(destinations);
  const cardRail = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!location && !travelDate && !tripType) {
      setMatchingDestinations(destinations);
      setSearchMessage("Choose a destination, date or trip style to get started.");
      return;
    }

    const query = location.trim().toLowerCase();
    const matches = destinations.filter((destination) => {
      const matchesLocation =
        !query ||
        `${destination.name} ${destination.place}`.toLowerCase().includes(query);
      const matchesStyle = !tripType || destination.style === tripType;
      return matchesLocation && matchesStyle;
    });

    setMatchingDestinations(matches);
    setSearchMessage(
      matches.length
        ? `Showing ${matches.length} ${matches.length === 1 ? "destination" : "destinations"} to explore.`
        : "No exact matches. Try another destination or trip style."
    );
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCards = (direction) => {
    cardRail.current?.scrollBy({
      left: direction * cardRail.current.clientWidth / 3,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#fbfaf8] pb-20 text-stone-900 md:pb-0">
      <section className="mx-auto max-w-[1550px] px-2 pt-2 sm:px-4 sm:pt-4">
        <div
          className="relative isolate flex min-h-[530px] items-end overflow-hidden rounded-xs bg-stone-800 bg-cover bg-center sm:min-h-[610px] lg:min-h-[680px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90')",
          }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/15 via-black/10 to-black/65" />

          <div className="absolute left-4 right-4 top-5 sm:left-8 sm:right-8 sm:top-7 lg:left-12 lg:right-12">
            <p className="mb-1 text-[clamp(4rem,15vw,13rem)] font-light uppercase leading-[0.75] tracking-[-0.08em] text-white/95 [font-family:Georgia,serif]">
              Discover
            </p>
            <p className="ml-1 mt-4 max-w-[180px] text-[10px] font-medium uppercase tracking-[0.25em] text-white/85 sm:ml-2 sm:mt-6 sm:max-w-xs sm:text-xs">
              Find your way to somewhere unforgettable
            </p>
          </div>

          <div className="relative z-10 max-w-xl px-5 pb-8 text-white sm:px-9 sm:pb-12 lg:px-14 lg:pb-16">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-xs">
              Travel, at your own pace
            </p>
            <h1 className="max-w-lg font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Explore the beauty of nature, like never before.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
              Thoughtful journeys, open landscapes and the freedom to take the
              scenic route.
            </p>
            <a
              href="#destinations"
              className="mt-6 inline-flex items-center gap-2 rounded-xs bg-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-stone-900 transition hover:bg-stone-100"
            >
              Start your journey
              <ArrowDown size={14} />
            </a>
          </div>

          <Link
            to="/gallery"
            className="absolute bottom-5 right-5 hidden h-32 w-48 overflow-hidden rounded-xs border border-white/70 bg-cover bg-center shadow-xl transition hover:scale-[1.02] sm:block lg:bottom-8 lg:right-8 lg:h-40 lg:w-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85')",
            }}
            aria-label="Explore the travel gallery"
          >
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-xs font-medium text-white">
              Explore the gallery
              <ArrowUpRight className="ml-1 inline" size={13} />
            </span>
          </Link>

          <a
            href="#trip-search"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/80 lg:flex"
          >
            Scroll to explore
            <ArrowDown size={15} />
          </a>
        </div>
      </section>

      <section
        id="trip-search"
        className="mx-auto max-w-[1320px] px-4 pt-5 sm:px-7 sm:pt-7 lg:px-10"
      >
        <form
          onSubmit={handleSearch}
          className="grid gap-2 border border-stone-200 bg-white p-2 shadow-sm sm:grid-cols-[1.2fr_1fr_1fr_auto] sm:items-center"
        >
          <label className="flex min-h-14 items-center gap-3 border-b border-stone-100 px-3 sm:border-b-0 sm:border-r">
            <MapPin size={17} className="shrink-0 text-stone-500" />
            <span className="min-w-0 flex-1">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                Destination
              </span>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City or address"
                className="mt-1 w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
              />
            </span>
          </label>

          <label className="flex min-h-14 items-center gap-3 border-b border-stone-100 px-3 sm:border-b-0 sm:border-r">
            <CalendarDays size={17} className="shrink-0 text-stone-500" />
            <span className="min-w-0 flex-1">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                Travel date
              </span>
              <input
                type="date"
                value={travelDate}
                onChange={(event) => setTravelDate(event.target.value)}
                className="mt-1 w-full bg-transparent text-sm text-stone-700 outline-none"
              />
            </span>
          </label>

          <label className="flex min-h-14 items-center gap-3 px-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center border border-stone-200 text-stone-500">
              <Mountain size={16} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                Trip style
              </span>
              <select
                value={tripType}
                onChange={(event) => setTripType(event.target.value)}
                className="mt-1 w-full appearance-none bg-transparent text-sm text-stone-700 outline-none"
              >
                <option value="">Choose an experience</option>
                <option value="nature">Nature & landscapes</option>
                <option value="road-trip">Road trip</option>
                <option value="weekend">Weekend escape</option>
              </select>
            </span>
          </label>

          <button
            type="submit"
            aria-label="Search trips"
            className="grid h-12 w-full place-items-center rounded-xs bg-stone-950 text-white transition hover:bg-stone-700 sm:h-12 sm:w-12"
          >
            <Search size={18} />
          </button>
        </form>
        {searchMessage && (
          <p role="status" className="px-2 pt-2 text-xs text-stone-600">
            {searchMessage}
          </p>
        )}
      </section>

      <section
        id="destinations"
        className="mx-auto max-w-[1320px] px-4 pb-10 pt-12 sm:px-7 sm:pb-16 sm:pt-16 lg:px-10 lg:pt-20"
      >
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Handpicked for you
            </p>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              Recommended destinations
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              aria-label="Previous destinations"
              className="grid h-10 w-10 place-items-center rounded-xs border border-stone-300 transition hover:bg-stone-100"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollCards(1)}
              aria-label="Next destinations"
              className="grid h-10 w-10 place-items-center rounded-xs border border-stone-300 transition hover:bg-stone-100"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={cardRail}
          className="destination-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-5"
        >
          {matchingDestinations.map((destination) => (
            <article
              key={destination.name}
              className="group w-[85%] shrink-0 snap-start border border-stone-200 bg-white p-2.5 transition hover:border-stone-400 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <Link to="/contact" className="block">
                <div
                  className="relative h-48 overflow-hidden rounded-xs bg-stone-200 bg-cover bg-center sm:h-44"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                  role="img"
                  aria-label={`${destination.name} landscape`}
                >
                  <span className="absolute right-2 top-2 bg-white/95 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-stone-700">
                    {destination.country}
                  </span>
                  <span className="absolute bottom-2 left-2 bg-black/45 px-2 py-1 text-[9px] text-white backdrop-blur-sm">
                    {destination.place}
                  </span>
                </div>
                <div className="px-1 pb-1 pt-3">
                  <h3 className="font-serif text-lg leading-snug">{destination.name}</h3>
                  <p className="mt-1 min-h-10 text-xs leading-5 text-stone-500">
                    {destination.description}
                  </p>
                  <span className="mt-3 flex items-center justify-between border-t border-stone-100 pt-3 text-[10px] font-semibold uppercase tracking-wide text-stone-700">
                    Plan this trip
                    <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-xs font-semibold uppercase tracking-wide"
          >
            View all destinations
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
