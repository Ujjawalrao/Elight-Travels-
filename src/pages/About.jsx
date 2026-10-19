import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  HeartHandshake,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  Eye,
  Globe2,
  Phone,
} from "lucide-react";

const principles = [
  {
    icon: HeartHandshake,
    title: "Personal attention",
    description:
      "We listen to what matters to you and help shape travel options around your plans, preferences and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Clear and considered",
    description:
      "Thoughtful conversations and clear information help make planning feel straightforward from the start.",
  },
  {
    icon: Route,
    title: "Journeys with purpose",
    description:
      "From a short escape to a longer holiday, we help you explore the arrangements that suit your journey.",
  },
  {
    icon: Sparkles,
    title: "Made for discovery",
    description:
      "We want you to spend less time worrying about arrangements and more time enjoying the places you visit.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "Make travel planning more approachable by understanding individual needs and helping travellers organize journeys around their preferences.",
  },
  {
    icon: Eye,
    title: "Our vision",
    description:
      "Build lasting relationships through welcoming experiences, a spirit of discovery, and thoughtful planning for every journey.",
  },
  {
    icon: Globe2,
    title: "What guides us",
    description:
      "Customer-first conversations, trust and transparency, and an enduring curiosity about the places waiting to be explored.",
  },
];

export default function About() {
  return (
    <main className="bg-[#fbfaf8] pb-20 text-stone-900 md:pb-0">
      <section className="mx-auto max-w-[1440px] px-2 pt-2 sm:px-4 sm:pt-4">
        <div
          className="relative isolate flex items-end overflow-hidden rounded-xs bg-stone-800 bg-cover bg-center"
          style={{ minHeight: "clamp(460px, 70vh, 620px)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2200&q=90"
            alt="A quiet alpine lake surrounded by mountains"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/15 via-black/10 to-black/65" />

          <div className="absolute left-4 right-4 top-5 sm:left-8 sm:right-8 sm:top-7 lg:left-12 lg:right-12">
            <p className="mb-1 text-[clamp(3.5rem,14vw,12rem)] font-light uppercase leading-[0.75] tracking-[-0.08em] text-white/95 [font-family:Georgia,serif]">
              About
            </p>
            <p className="ml-1 mt-4 max-w-xs text-[10px] font-medium uppercase tracking-[0.25em] text-white/85 sm:ml-2 sm:mt-6 sm:text-xs">
              Thoughtful journeys begin with a conversation
            </p>
          </div>

          <div className="relative z-10 max-w-2xl px-5 pb-8 text-white sm:px-9 sm:pb-12 lg:px-14 lg:pb-16">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-xs">
              The Elight difference
            </p>
            <h1 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Every journey has a story worth discovering.
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
              We help you explore travel possibilities and plan experiences
              that make every trip meaningful.
            </p>
            <a
              href="#our-approach"
              className="mt-6 inline-flex items-center gap-2 rounded-xs bg-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-stone-900 transition hover:bg-stone-100"
            >
              Get to know us
              <ArrowDown size={14} />
            </a>
          </div>

          <div className="absolute bottom-5 right-5 hidden max-w-[220px] border border-white/70 bg-white/95 p-4 text-stone-900 sm:block lg:bottom-8 lg:right-8 lg:max-w-[260px] lg:p-5">
            <Compass size={19} strokeWidth={1.6} />
            <p className="mt-3 font-serif text-lg">Your journey, your way.</p>
            <p className="mt-1 text-xs leading-5 text-stone-600">
              Travel plans shaped around what matters to you.
            </p>
          </div>
        </div>
      </section>

      <section
        id="our-approach"
        className="mx-auto grid max-w-[1320px] gap-8 px-5 py-14 sm:px-7 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-24"
      >
        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85"
            alt="A scenic mountain road through a green landscape"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            Take the scenic route
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            Who we are
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Making travel feel more effortless.
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone-600 sm:text-base">
            Elight Travels is focused on helping people explore travel options
            and make plans with greater confidence. Every traveller has
            different expectations, whether the goal is a relaxing holiday, a
            family getaway, or a journey somewhere new.
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
            We start by understanding your needs, discussing suitable
            arrangements, and helping you consider the details that matter.
            From the first enquiry onward, we want planning to feel welcoming
            and clear.
          </p>
          <div className="mt-6 grid gap-3 border-t border-stone-200 pt-5 text-sm text-stone-700 sm:grid-cols-2">
            <p className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-stone-900" />
              Options tailored to your requirements
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-stone-900" />
              Clear, thoughtful communication
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-stone-900" />
              Comfortable, memorable journeys
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-7 inline-flex w-fit items-center gap-2 border-b border-stone-900 pb-1 text-xs font-semibold uppercase tracking-wide"
          >
            Start a conversation
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white/60">
        <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-7 sm:py-20 lg:px-10">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              What guides us
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              A considered approach to every journey.
            </h2>
          </div>
          <div className="grid border-l border-t border-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="border-b border-r border-stone-200 bg-[#fbfaf8] p-5 sm:p-6 lg:min-h-[235px] lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon size={21} strokeWidth={1.5} className="text-stone-700" />
                  <span className="text-[10px] tracking-[0.15em] text-stone-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-xl">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-stone-600 sm:text-sm">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14 sm:px-7 sm:py-20 lg:px-10">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            Our purpose
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            The values behind every journey.
          </h2>
        </div>
        <div className="grid gap-5 border-t border-stone-200 md:grid-cols-3 md:gap-8">
          {values.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="border-b border-stone-200 py-5 sm:py-6 md:border-b-0"
            >
              <div className="flex items-center justify-between">
                <Icon size={21} strokeWidth={1.5} className="text-stone-700" />
                <span className="text-[10px] tracking-[0.15em] text-stone-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-14 sm:px-7 sm:pb-20 lg:px-10">
        <div className="flex flex-col gap-6 border-y border-stone-300 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Let&apos;s plan something special
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Where will your next story begin?
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Tell us what you have in mind and we&apos;ll help you explore the
              possibilities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:9466195421"
              className="inline-flex items-center gap-2 rounded-xs bg-stone-950 px-4 py-3 text-xs font-semibold text-white transition hover:bg-stone-700"
            >
              <Phone size={15} />
              Call us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xs border border-stone-300 px-4 py-3 text-xs font-semibold text-stone-800 transition hover:border-stone-900"
            >
              Contact us
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
