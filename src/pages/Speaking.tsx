import Header from "../components/Header";

import Section from "../components/Section";
import SEO from "../components/SEO";
import { SimpleLink } from "../components/SimpleLink";
import { SEOtypes } from "../components/types/ComponentsTypes";
import { podcast, speakingContent } from "../utils/content";

const Speaking: React.FC = () => {
  const seo: SEOtypes = {
    title: "Speaking",
    description: "Sharing is caring as we say, so I do as I preach.",
    meta: [],
    ogDescription: "Sharing is caring as we say, so I do as I preach.",
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
          <h3 className="card-title tracking-wide mb-2 text-secondary">
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
                    <h3 className="text-base">{content.title}</h3>
                    <p className="relative order-first mb-3 flex items-center text-sm pl-3.5">
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-accent"></span>
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

          <h3 className="card-title tracking-wide mb-2 text-secondary">
            Podcast
          </h3>
          <div className="md:col-span-3">
            <div className="space-y-10">
              {podcast.map((content) => {
                return (
                  <article
                    key={content.id}
                    className=" relative flex flex-col items-start"
                  >
                    <h3 className="text-base">{content.title}</h3>
                    <p className="relative order-first mb-3 flex items-center text-sm pl-3.5">
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-accent"></span>
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
