import Header from "../components/Header";

import Section from "../components/Section";
import SEO from "../components/SEO";
import { SimpleLink } from "../components/SimpleLink";
import { MetaTag, SEOtypes } from "../components/types/ComponentsTypes";
import { podcast, speakingContent } from "../utils/content";

const Speaking: React.FC = () => {
  const descriptionContent: string =
    "Sharing is caring as we say, so I do as I preach. I will continue to talk about digital eco-design.";

  const meta: (
    | MetaTag
    | { name: string; content: string }
    | { property: string; content: string }
  )[] = [
    {
      name: "description",
      content: descriptionContent,
    },
    {
      name: "keywords",
      content:
        "conferences, web developer, podcasts, eco-design, accessibility",
    },
    { property: "og:title", content: "Speaking" },
    {
      property: "og:description",
      content: descriptionContent,
    },
  ];

  const seo: SEOtypes = {
    title: "Speaking",
    description: descriptionContent,
    meta: meta,
    ogDescription: descriptionContent,
  };

  const sectionContent = {
    title: "Sharing is caring",
    text: "So as the saying applies, I like to share what I care about. We are responsible for what we do and we cannot continue our work in the IT sector without implementing changes in the creation process. I will continue to talk about digital eco-design.",
  };

  return (
    <>
      <SEO props={seo} />

      <Header title="Speaking" />

      <Section {...sectionContent}>
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4 mt-10 md:mt-20">
          <h3 className="card-title tracking-wide mb-2 text-accent">
            Conferences
          </h3>
          <div className="md:col-span-3">
            <div className="space-y-10">
              {speakingContent.map((content) => {
                return (
                  <article
                    key={content.id}
                    className=" relative flex flex-col items-start"
                  >
                    <h4 className="text-base">{content.title}</h4>
                    <p className="relative order-first mb-3 flex items-center text-sm pl-3.5">
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-secondary"></span>
                      </span>
                      {content.subtitle}
                    </p>
                    <p className="relative mt-2 text-sm">{content.desc}</p>
                    <p className="mt-2">
                      <SimpleLink
                        label={content.link.label}
                        src={content.link.src}
                        ariaLabel={content.link.ariaLabel}
                        isExternalLink={content.link.isExternalLink}
                      />
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <h3 className="card-title tracking-wide mb-2 text-accent">Podcast</h3>
          <div className="md:col-span-3">
            <div className="space-y-10">
              {podcast.map((content) => {
                return (
                  <article
                    key={content.id}
                    className=" relative flex flex-col items-start"
                  >
                    <h4 className="text-base">{content.title}</h4>
                    <p className="relative order-first mb-3 flex items-center text-sm pl-3.5">
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-secondary"></span>
                      </span>
                      {content.subtitle}
                    </p>
                    <p className="relative mt-2 text-sm">{content.desc}</p>
                    <p className="mt-2">
                      <SimpleLink
                        label={content.link.label}
                        src={content.link.src}
                        ariaLabel={content.link.ariaLabel}
                        isExternalLink={content.link.isExternalLink}
                      />
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Speaking;
