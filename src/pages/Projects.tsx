import Header from "../components/Header";
import { MyImage } from "../components/ImgLazy";
import Section from "../components/Section";
import SEO from "../components/SEO";
import { SimpleLink } from "../components/SimpleLink";
import {
  ImageType,
  LinkType,
  ProjectType,
  SEOtypes,
} from "../components/types/ComponentsTypes";
import { projectImageList, projectList } from "../utils/content";

const Project: React.FC = () => {
  const seo: SEOtypes = {
    title: "Projects",
    description:
      "This is where you can find all my projects that are on my GitHub.",
    meta: [],
    ogDescription:
      "This is where you can find all my projects that are on my GitHub.",
  };

  const sectionContent = {
    text: "Whenever I can, I am working on small projects. Sometimes, it allows me to reinforce my knowledge and to experience new frameworks or languages.",
    title: "A view on my side projects",
    padding: "lg:pb-24 lg:p-8 md:pb-24",
  };

  return (
    <>
      <SEO props={seo} />

      <Header title="Projects" />

      <div className="mt-16 sm:mt-20" aria-hidden>
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {projectImageList.map((image: ImageType) => {
            return (
              <div
                key={image.key}
                className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl rotate-2 last-of-type:-rotate-2 [&:nth-child(2)]:-rotate-2"
              >
                <MyImage image={image} />
              </div>
            );
          })}
        </div>
      </div>

      <Section {...sectionContent}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 mt-10 md:mt-20">
          {projectList.map((project: ProjectType) => {
            return (
              <div
                key={project.id}
                className="group flex flex-col justify-start items-start gap-2 w-fit sm:w-96 sm:h-[19rem] duration-500 relative rounded-xl p-6 bg-neutral hover:-translate-y-2 hover:shadow-xl shadow-md"
              >
                <div
                  style={{
                    backgroundImage: `url(${project.img?.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="hidden sm:block absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-7 md:-bottom-16 -right-2 md:-right-10 w-1/2 h-1/2 rounded-xl bg-base-neutral"
                ></div>

                <div>
                  <h3 className="card-title tracking-wide mb-2 text-neutral-content">
                    {project.title}
                  </h3>
                  <p className="text-neutral-content text-sm">
                    {project.description}
                  </p>

                  <ul className="mt-2 flex gap-2 flex-wrap list-none">
                    {project.tags.map((tag: string, index: number) => {
                      return (
                        <li
                          key={index}
                          className="badge badge-info font-bold p-2"
                        >
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt-auto flex gap-4">
                  {project.links.map((link: LinkType) => {
                    return (
                      <SimpleLink
                        key={link?.id}
                        className="text-neutral-content"
                        label={link.label}
                        src={link.src}
                        ariaLabel={link.ariaLabel}
                        isExternalLink
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default Project;
