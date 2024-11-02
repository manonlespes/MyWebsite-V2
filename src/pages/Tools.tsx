import Header from "../components/Header";

import Section from "../components/Section";
import SEO from "../components/SEO";
import SmallCard from "../components/SmallCard";
import { SEOtypes, SmallCardType } from "../components/types/ComponentsTypes";
import { languageList, toolList } from "../utils/content";

export const Tools: React.FC = () => {
  const seo: SEOtypes = {
    title: "Uses",
    description:
      "As a front-end developper, I am using a certain amout of tools. Look at which ones. Discover also the languages I develop in.",
    meta: [],
    ogDescription:
      "As a front-end developper, I am using a certain amout of tools. Look at which ones. Discover also the languages I develop in.",
  };

  const sectionLanguages = {
    title: "Languages",
    text: "I keep following evolutions of the below languages to extend my knowledge and I am ready to learn more languages and frameworks in the future. Challenge me!",
  };

  const sectionTools = {
    title: "What kind of tools am I using?",
    text: "This is not a comprehensive list, but it gives you a hint of some of the tools I am often using.",
  };

  return (
    <>
      <SEO props={seo} />

      <Header title="Uses" />
      <Section {...sectionLanguages}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-20">
          {languageList.map((tool: SmallCardType) => {
            return (
              <SmallCard
                key={tool.id}
                id={tool.id}
                title={tool.title}
                svg={tool.svg}
                content={tool.content}
              />
            );
          })}
        </div>
      </Section>
      <Section {...sectionTools}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-20">
          {toolList.map((tool: SmallCardType) => {
            return (
              <SmallCard
                key={tool.id}
                id={tool.id}
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
