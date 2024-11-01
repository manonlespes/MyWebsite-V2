import { MyImage } from "../components/ImgLazy";
import { SimpleLink } from "../components/SimpleLink";
import {
  ImageType,
  LinkType,
  ProjectType,
} from "../components/types/ComponentsTypes";
import { projectImageList, projectList } from "../utils/content";

const Project = () => {
  return (
    <>
      <section className="block w-fit m-auto bg-base-100 h-fit">
        <div className="p-5 md:p-10 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-movement bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
            Projects
          </h1>
        </div>
      </section>

      <div className="mt-16 sm:mt-20" aria-hidden>
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {projectImageList.map((image: ImageType) => {
            return (
              <div
                key={image.key}
                className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl rotate-2  last-of-type:-rotate-2 [&:nth-child(2)]:-rotate-2"
              >
                <MyImage image={image} />
              </div>
            );
          })}
        </div>
      </div>

      <section className="px-3 pt-10 pb-5 md:px-5 md:pt-16 md:pb-10 lg:px-10 lg:pt-24 lg:pb-18 2xl:px-36 2xl:py-20">
        <div className="bg-base-200 mx-auto w-full max-w-7xl py-4 lg:p-8 lg:pb-20 rounded md:rounded-xl shadow-lg">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto block w-fit text-center max-w-[800px]">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-movement text-accent block mx-auto w-fit mb-10">
                A view on my side projects
              </h2>

              <p className="text-base-content text-base">
                Whenever I can, I am working on small projects. Sometimes, it
                allows me to reinforce my knowledge and to experience new
                frameworks or languages.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-20">
              {projectList.map((project: ProjectType) => {
                return (
                  <div
                    key={project.id}
                    className="group flex flex-col justify-start items-start gap-2 w-fit sm:w-96 sm:h-[19rem] duration-500 relative rounded-xl p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-neutral-800"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${project.img?.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      className="hidden sm:block absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-7 md:-bottom-10 -right-2 md:-right-10 w-1/2 h-1/2 rounded-xl bg-base-neutral"
                    ></div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-neutral-content">
                        {project.title}
                      </h3>
                      <p className="text-neutral-content text-sm md:text-base">
                        {project.description}
                      </p>

                      <ul className="mt-2 flex gap-2 flex-wrap list-none">
                        {project.tags.map((tag: string, index: number) => {
                          return (
                            <li
                              key={index}
                              className="badge badge-info text-[11px] font-bold p-2"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
