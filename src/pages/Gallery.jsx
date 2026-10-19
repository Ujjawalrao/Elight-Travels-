import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from "lucide-react";

const photos = [
  {
    id: 1,
    title: "Mountain Escapes",
    category: "Nature",
    location: "Find your quiet in the highlands",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Coastal Paradise",
    category: "Destinations",
    location: "Follow the shoreline",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "A Place to Unwind",
    category: "Hotels",
    location: "Stay somewhere special",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "The Open Road",
    category: "Road Trips",
    location: "Enjoy every mile along the way",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "A View Worth the Climb",
    category: "Nature",
    location: "Take in the world from above",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "City Afterglow",
    category: "Destinations",
    location: "Find a new favourite corner",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Miles Together",
    category: "Road Trips",
    location: "Make the journey part of the story",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    title: "A Peaceful Retreat",
    category: "Hotels",
    location: "Leave room for a slower day",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = ["All", "Nature", "Destinations", "Road Trips", "Hotels"];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.18 } },
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const showNextPhoto = useCallback((direction) => {
    if (!selectedPhoto || filteredPhotos.length < 2) return;

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const nextIndex =
      (currentIndex + direction + filteredPhotos.length) %
      filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  }, [filteredPhotos, selectedPhoto]);

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPhoto(null);
      if (event.key === "ArrowRight") showNextPhoto(1);
      if (event.key === "ArrowLeft") showNextPhoto(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, showNextPhoto]);

  return (
    <main className="bg-[#fbfaf8] pb-20 text-stone-900 md:pb-0">
      <section className="mx-auto max-w-[1440px] px-2 pt-2 sm:px-4 sm:pt-4">
        <div
          className="relative isolate flex min-h-[380px] items-end overflow-hidden rounded-xs bg-cover bg-center sm:min-h-[450px] lg:min-h-[500px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85')",
          }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/15 to-black/65" />
          <div className="absolute left-4 right-4 top-6 sm:left-8 sm:right-8 sm:top-8 lg:left-12">
            <p className="text-[clamp(3.5rem,13vw,10rem)] font-light uppercase leading-[0.75] tracking-[-0.08em] text-white/95 [font-family:Georgia,serif]">
              The gallery
            </p>
            <p className="ml-1 mt-5 max-w-sm text-[10px] font-medium uppercase tracking-[0.25em] text-white/85 sm:ml-2 sm:text-xs">
              A little inspiration for the road ahead
            </p>
          </div>
          <div className="relative z-10 max-w-xl px-5 pb-8 text-white sm:px-9 sm:pb-11 lg:px-14">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-xs">
              Places, paths & pauses
            </p>
            <h1 className="max-w-lg font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              See where the journey could take you.
            </h1>
          </div>
          <div className="absolute bottom-5 right-5 hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:flex">
            <Camera size={15} />
            Moments worth keeping
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pb-12 pt-12 sm:px-7 sm:pb-16 sm:pt-16 lg:px-10">
        <div className="flex flex-col justify-between gap-5 border-b border-stone-200 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              A collection of places to go
            </p>
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              Travel inspiration
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-stone-600">
            From quiet landscapes to winding roads, find a scene that feels
            like your kind of escape.
          </p>
        </div>

        <div
          className="flex gap-2 overflow-x-auto border-b border-stone-200 py-4"
          aria-label="Filter gallery by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSelectedPhoto(null);
              }}
              aria-pressed={activeCategory === category}
              className={`shrink-0 rounded-xs border px-4 py-2 text-xs font-medium transition ${
                activeCategory === category
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-transparent text-stone-600 hover:border-stone-700 hover:text-stone-950"
              }`}
            >
              {category}
              <span className="ml-2 text-[10px] opacity-65">
                {category === "All"
                  ? photos.length
                  : photos.filter((photo) => photo.category === category).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          className="mt-5 grid auto-rows-[230px] grid-cols-1 gap-3 sm:auto-rows-[260px] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[280px] lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`View ${photo.title}`}
                className={`group relative isolate block h-full w-full overflow-hidden rounded-xs border border-stone-200 bg-stone-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-stone-700 ${
                  activeCategory === "All" && index === 0
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute left-3 top-3 border border-white/70 bg-white/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-stone-800">
                  {photo.category}
                </span>
                <span className="absolute right-3 top-3 grid h-8 w-8 translate-y-1 place-items-center bg-white text-stone-900 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="mb-1 block text-xs text-white/75">
                    {photo.location}
                  </span>
                  <span className="block font-serif text-xl text-white sm:text-2xl">
                    {photo.title}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    View photograph
                    <ArrowUpRight size={13} />
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col gap-5 border-y border-stone-300 py-7 sm:flex-row sm:items-center sm:justify-between sm:py-8">
          <div className="flex items-start gap-3">
            <Images size={20} strokeWidth={1.6} className="mt-1 shrink-0" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl">
                Your next adventure is waiting.
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Tell us what inspires you and let&apos;s plan the journey.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-xs bg-stone-950 px-4 py-3 text-xs font-semibold text-white transition hover:bg-stone-700"
          >
            Plan your trip
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/90 p-3 sm:p-8"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedPhoto.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl border border-white/20 bg-[#fbfaf8]"
            >
              <div className="relative flex max-h-[72vh] min-h-[240px] items-center justify-center bg-stone-950">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[72vh] w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close image preview"
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-white text-stone-900"
                >
                  <X size={18} />
                </button>
                {filteredPhotos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => showNextPhoto(-1)}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center bg-white text-stone-900"
                    >
                      <ChevronLeft size={19} />
                    </button>
                    <button
                      type="button"
                      onClick={() => showNextPhoto(1)}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center bg-white text-stone-900"
                    >
                      <ChevronRight size={19} />
                    </button>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {selectedPhoto.category}
                  </p>
                  <h2 className="mt-1 font-serif text-xl sm:text-2xl">
                    {selectedPhoto.title}
                  </h2>
                  <p className="mt-1 text-xs text-stone-600">
                    {selectedPhoto.location}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-stone-500">
                  {filteredPhotos.findIndex(
                    (photo) => photo.id === selectedPhoto.id
                  ) + 1}{" "}
                  / {filteredPhotos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
