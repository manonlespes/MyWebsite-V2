import { LazyLoadComponent } from "react-lazy-load-image-component";
import Header from "../components/Header";
import ImageLazy from "../components/ImageLazy";

import Section from "../components/Section";
import SEO from "../components/SEO";
import { SimpleLink } from "../components/SimpleLink";
import {
  ImageType,
  LinkType,
  MetaTag,
  ProjectType,
  SEOtypes,
} from "../components/types/ComponentsTypes";
import { projectImageList, projectList } from "../utils/content";

const Project: React.FC = () => {
  const descriptionContent: string =
    "This is where you can find all my projects that are on my GitHub.";

  const meta: (
    | MetaTag
    | { name: string; content: string }
    | { property: string; content: string }
  )[] = [
    {
      name: "description",
      content: descriptionContent,
    },
    { name: "keywords", content: "portfolio, web developer, projects, GitHub" },
    { property: "og:title", content: "Projects" },
    {
      property: "og:description",
      content: descriptionContent,
    },
  ];

  const seo: SEOtypes = {
    title: "Projects",
    description: descriptionContent,
    meta: meta,
    ogDescription: descriptionContent,
  };

  const sectionContent = {
    text: "Whenever I can, I am working on small projects. Sometimes, it allows me to reinforce my knowledge and to experience new frameworks or languages.",
    title: "A view on my side projects",
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
                className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl rotate-2 last-of-type:-rotate-2 [&:nth-child(2)]:-rotate-2 shadow-md"
              >
                <ImageLazy image={image} />
              </div>
            );
          })}
        </div>
      </div>

      <Section {...sectionContent}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {projectList.map((project: ProjectType) => {
            return (
              <LazyLoadComponent key={project.id}>
                <div className="group flex flex-col justify-start items-start gap-2 w-fit sm:h-[19rem] duration-500 relative rounded-xl p-6 bg-neutral hover:-translate-y-2 hover:shadow-xl shadow-md">
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
              </LazyLoadComponent>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default Project;
