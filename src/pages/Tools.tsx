import Header from "../components/Header";

import Section from "../components/Section";
import SEO from "../components/SEO";
import SmallCard from "../components/SmallCard";
import { SEOtypes, SmallCardType } from "../components/types/ComponentsTypes";
import { toolList } from "../utils/content";

export const Tools: React.FC = () => {
  const seo: SEOtypes = {
    title: "Tools",
    description:
      "As a front-end developper, I am using a certain amout of tools. Look at which ones.",
    meta: [],
    ogDescription:
      "As a front-end developper, I am using a certain amout of tools. Look at which ones.",
  };

  const sectionContent = {
    title: "What kind of tools am I using?",
    text: "...",
  };

  return (
    <>
      <SEO props={seo} />

      <Header title="Tools" />
      <Section {...sectionContent}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-20">
          {toolList.map((tool: SmallCardType, index: number) => {
            return (
              <SmallCard
                key={index}
                title={tool.title}
                svg={tool.svg}
                content={tool.content}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default Tools;
