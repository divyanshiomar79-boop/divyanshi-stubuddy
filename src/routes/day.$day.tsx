import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ChallengeView } from "@/components/site/ChallengeView";

export const Route = createFileRoute("/day/$day")({
  head: ({ params }) => ({
    meta: [
      { title: `Day ${params.day} Task — AB TALKS Challenge` },
      {
        name: "description",
        content:
          "Complete the daily AB TALKS challenge task and submit your GitHub repo and LinkedIn post as proof of work.",
      },
      { property: "og:title", content: `Day ${params.day} Task — AB TALKS` },
      {
        property: "og:description",
        content: "Build a responsive navbar using React and Tailwind, then submit your proof.",
      },
    ],
  }),
  component: DayPage,
});

function DayPage() {
  const { day } = Route.useParams();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-8">
        <ChallengeView day={day} />
      </main>
      <Footer />
    </div>
  );
}
