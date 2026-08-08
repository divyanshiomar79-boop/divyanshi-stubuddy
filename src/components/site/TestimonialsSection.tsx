import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Devpal Singh",
    title: "SDE at Google",
    quote:
      "This challenge completely transformed how I approach DSA. The daily tasks kept me consistent.",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Nandika Sharma",
    title: "Student at IIT Delhi",
    quote: "The 60-day structure made coding a habit. Best decision I made for placements.",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Komal Goswami",
    title: "Frontend Developer",
    quote: "The AI cohort helped me build and deploy my first chatbot. Incredible learning experience.",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Yashaswani Singh",
    title: "Student at VIT",
    quote: "Vibe Code Hackathon was insane. Built a full project in 48 hours with AI.",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Samridhi Gupta",
    title: "Data Scientist",
    quote: "Claude Challenge taught me prompt engineering like never before. Game changer.",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Vivek",
    title: "SDE at Amazon",
    quote: "The community and daily accountability made all the difference. 10/10 would recommend.",
    img: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Lakshay",
    title: "Student at DTU",
    quote: "From zero to confident in DSA in just 60 days. The projects are real and practical.",
    img: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Rida Khan",
    title: "ML Engineer",
    quote: "The mentors and peer group pushed me to build things I never thought I could.",
    img: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Divya",
    title: "Student at NIT",
    quote: "Loved the glassmorphism UI and the daily streaks. Made learning fun and consistent.",
    img: "https://i.pravatar.cc/150?img=9",
  },
];

function useSlidesPerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setPerView(3);
      else if (window.matchMedia("(min-width: 768px)").matches) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

function TestimonialCard({
  name,
  title,
  quote,
  img,
}: {
  name: string;
  title: string;
  quote: string;
  img: string;
}) {
  return (
    <article className="glass glass-hover glass-shine flex h-full flex-col rounded-2xl p-6">
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={img}
          alt={name}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-full border-2 border-[color-mix(in_oklab,var(--neon-blue)_40%,transparent)] object-cover shadow-[0_0_12px_-2px_var(--neon-purple)]"
        />
        <div className="min-w-0">
          <p className="truncate font-semibold">{name}</p>
          <p className="truncate text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const perView = useSlidesPerView();
  const pageCount = Math.max(1, testimonials.length - perView + 1);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setCurrent((c) => Math.min(c, pageCount - 1));
  }, [pageCount]);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(((next % pageCount) + pageCount) % pageCount);
    },
    [current, pageCount],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % pageCount);
    }, 4000);
    return () => window.clearInterval(id);
  }, [paused, pageCount]);

  const visible = testimonials.slice(current, current + perView);

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="glass glass-shine mt-10 scroll-mt-20 rounded-3xl p-6 sm:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-center text-2xl font-bold sm:text-3xl">What our builders say</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
        Real stories from students and professionals who finished the 60-Day Claude Challenge.
      </p>

      <div className="relative mt-10">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={prev}
          className="glass glass-shine absolute top-1/2 -left-2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full transition-transform hover:scale-110 sm:-left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={next}
          className="glass glass-shine absolute top-1/2 -right-2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full transition-transform hover:scale-110 sm:-right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="overflow-hidden px-6 sm:px-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-brand-gradient shadow-[0_0_10px_-1px_var(--neon-purple)]"
                  : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
