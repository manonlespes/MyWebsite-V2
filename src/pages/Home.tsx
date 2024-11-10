import Card from "../components/Card";
import { TimeLine } from "../components/TimeLine";
import {
  CardContentType,
  ImageType,
  MetaTag,
  SEOtypes,
} from "../components/types/ComponentsTypes";
import { aboutContentCards } from "../utils/content";
import BackgroundImg from "../images/background_img.webp";
import Front from "../images/front_end_img.webp";

import SEO from "../components/SEO";
import Section from "../components/Section";
import ImageLazy from "../components/ImageLazy";

const Home: React.FC = () => {
  const descriptionContent: string =
    "Welcome on my portfolio, where I am introducing myself and the different projects I've been working on so far!";

  const meta: (
    | MetaTag
    | { name: string; content: string }
    | { property: string; content: string }
  )[] = [
    {
      name: "description",
      content: descriptionContent,
    },
    { name: "keywords", content: "portfolio, web developer" },
    { property: "og:title", content: "Home" },
    {
      property: "og:description",
      content: descriptionContent,
    },
  ];

  const seo: SEOtypes = {
    title: "Home",
    description: descriptionContent,
    meta: meta,
    ogDescription: descriptionContent,
  };

  const sectionIntro = {
    title: "Hello World",
    text: "I've been diving in the world of IT for 3 years now, and I can't help but go further.",
  };

  const sectionWork = {
    title: "Experiences",
    text: " My 'previous life' was completly different. Events organiser, community manager, translator and Front-end developer have few in common. There is, however, one consistency in my career path: the aim of creating bridges between different parties, using one or more communication channels to convey information, and this is exactly where I have always put my skills to good use and where my strength lies.",
    sectionBackground: "bg-secondary",
    titleColor: "text-neutral-content",
    textColor: "text-neutral-content",
  };

  const image: ImageType = {
    src: Front,
    className: "mask mask-hexagon-2 w-[750px]",
    width: "fit",
    height: "fit",
  };

  return (
    <>
      <SEO props={seo} />
      <section
        className="hero min-h-screen bg-cover bg-center md:bg-contain lg:bg-cover"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex flex-col lg:flex-row w-full justify-evenly">
          <ImageLazy image={image} />
          <div className="max-w-sm text-center lg:max-w-md lg:text-left">
            <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold font-movement bg-clip-text text-transparent bg-gradient-to-r from-neutral-content to-info">
              Hello there, I&apos;m Manon!
            </h1>

            <p className="mb-5 text-neutral-content text-sm md:text-base">
              A front-end developer, eager to code with passion your project.
            </p>
          </div>
        </div>
      </section>

      <Section {...sectionIntro}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20">
          {aboutContentCards.map((card: CardContentType, index: number) => {
            return (
              <div
                key={index}
                className="relative flex flex-col rounded-xl bg-neutral bg-clip-border text-neutral-content shadow-md"
              >
                <Card title={card.title} img={card.img} text={card.text} />
              </div>
            );
          })}
        </div>
      </Section>

      <Section {...sectionWork}>
        <TimeLine />
      </Section>
    </>
  );
};

export default Home;
