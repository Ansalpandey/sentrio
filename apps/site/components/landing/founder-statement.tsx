import { FadeIn } from "@/components/landing/fade-in";

export function FounderStatement() {
  return (
    <section id="why" className="px-6 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Why Sentrio exists
          </h2>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m{" "}
              <strong className="font-medium text-foreground">Ansal Pandey</strong>,
              a third-year CSE student, and I created Sentrio because I was tired of project management
              tools that got in the way more than they helped. Balancing rigorous coursework and development projects, I found that bloated, overcomplicated platforms
              <strong className="font-medium text-foreground">
                {" "}
                distracted from actual work
              </strong>
              , so I knew there had to be a better way.
            </p>
            <p>
              The problem wasn&apos;t that these tools lacked features - it was
              that they had
              <strong className="font-medium text-foreground"> too many</strong>
              . Every notification, every unnecessary button, every complex
              workflow was pulling me and my peers away from what mattered:{" "}
              <strong className="font-medium text-foreground">
                writing code and building great software
              </strong>
              .
            </p>
            <p>
              I believe the best tools are{" "}
              <strong className="font-medium text-foreground">invisible</strong>
              . They should amplify your natural workflow, not force
              you to adapt to theirs. Sentrio is built on the principle that
              <strong className="font-medium text-foreground">
                {" "}
                less is more
              </strong>{" "}
              - every feature exists because it solves a real problem, not
              because it looks impressive in a demo.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}