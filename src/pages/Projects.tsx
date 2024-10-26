import { SimpleLink } from "../components/SimpleLink";
import { LinkType, ProjectType } from "../components/types/ComponentsTypes";

export const Project = () => {
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
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              alt=""
              width="3744"
              height="5616"
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/front_end_img.webp"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              alt=""
              width="3936"
              height="2624"
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/blog.png"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              alt=""
              width="5760"
              height="3840"
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/color_picker.png"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl rotate-2">
            <img
              alt=""
              width="2400"
              height="3000"
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/friend_web.png"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-base-300 sm:w-72 sm:rounded-2xl -rotate-2">
            <img
              alt=""
              width="4240"
              height="2384"
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/background_img.webp"
            />
          </div>
        </div>
      </div>

      <section className="px-3 pt-10 pb-5 md:px-5 md:pt-16 md:pb-10 lg:px-10 lg:pt-24 lg:pb-18 2xl:px-36 2xl:py-20">
        <div className="bg-base-200 mx-auto w-full max-w-7xl py-4 lg:p-8 rounded md:rounded-xl shadow-lg">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-movement text-accent block mx-auto w-fit mb-10">
                A view on my side projects
              </h2>

              <p className="text-base-content text-base">
                Whenever I can, I am working on small projects. Sometimes, it
                allows me to reinforce my knowledge and to experience new
                frameworks or languages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20">
              {projectList.map((project: ProjectType, index: number) => {
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden h-80 md:h-96 2xl:h-[24em] rounded-3xl cursor-pointer text-2xl font-bold bg-secondary bg-blend-darken bg-opacity-10"
                    style={{
                      backgroundImage: `url(${project.img?.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="z-10 absolute w-full h-full peer"></div>
                    <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] peer-focus:-top-20 peer-focus:-left-16 peer-focus:w-[140%] peer-focus:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-info transition-all duration-500"></div>
                    <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full peer-focus:right-0 peer-focus:rounded-b-none peer-focus:bottom-0 peer-focus:items-center peer-focus:justify-center peer-focus:w-full peer-focus:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-info transition-all duration-500 opacity-0 peer-hover:opacity-100 peer-focus:opacity-100">
                      <div className="flex flex-col gap-y-5">
                        <h3 className="sr-only">{project.title}</h3>
                        <p className="text-base-content text-base md:text-lg px-5 max-w-[400px] text-center md:px-0">
                          {project.description}
                        </p>
                        <ul className="flex gap-4 flex-wrap px-5 list-none">
                          {project.tags.map((tag: string, index: number) => {
                            return (
                              <li
                                key={index}
                                className="badge badge-neutral font-bold mr-3 p-3"
                              >
                                {tag}
                              </li>
                            );
                          })}
                        </ul>
                        <div className="flex gap-4 px-5">
                          {project.links.map(
                            (link: LinkType, index: number) => {
                              return (
                                <SimpleLink
                                  key={index}
                                  label={link.label}
                                  src={link.src}
                                  ariaLabel={link.ariaLabel}
                                  isExternalLink
                                />
                              );
                            }
                          )}
                        </div>
                      </div>
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

const projectList: ProjectType[] = [
  {
    id: "1",
    img: {
      alt: "",
      src: "/images/color_picker.png",
    },
    title: "Color Picker",
    description: "This is a color picker",
    tags: ["Javascript", "HTML5", "CSS", "Color API"],
    links: [
      {
        label: "GitHub",
        isExternalLink: true,
        src: "https://github.com/manonlespes/color-picker",
        ariaLabel: "Go to repo",
      },
    ],
  },
  {
    id: "2",
    img: {
      alt: "",
      src: "/images/blog.png",
    },
    title: "My blog Space",
    description: "A quick fun project to test APIs",
    tags: ["Javascript", "HTML5", "CSS", "Scrimba API"],
    links: [
      {
        label: "GitHub",
        isExternalLink: true,
        src: "https://github.com/manonlespes/small-blog",
        ariaLabel: "Go to repo",
      },
    ],
  },
  {
    id: "3",
    img: {
      alt: "",
      src: "/images/friend_web.png",
    },
    title: "Amelie's website",
    description:
      "I helped a friend to launch her website. I advice her on the theme, colors, content, plugins and pages structure. I am still doing the maintenance and updating plugins. It is hosted on o2switch.",
    tags: ["WordPress", "CSS"],
    links: [
      {
        label: "Visit the site",
        isExternalLink: true,
        src: "https://amelie-parolin.com/",
        ariaLabel: "Visite Amelie's website",
      },
    ],
  },
];
