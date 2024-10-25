import { SimpleLink } from "../components/SimpleLink";
import { LinkType, ProjectType } from "../components/types/ComponentsTypes";

export const Project = () => {
  return (
    <>
      <section className="hero bg-base-100 h-[300px]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold font-movement bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Projects
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-base-200 px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-18 2xl:px-36 2xl:py-20">
        <div className="block mx-auto max-w-[800px] w-fit mb-10 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-movement text-accent block mx-auto w-fit mb-10">
            A view on my side projects
          </h2>

          <p className="text-base-content text-base">
            Whenever I can, I am working on small projects. Sometimes, it allows
            me to reinforce my knowledge and to experience new frameworks or
            languages.
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
                    <p className="text-base-content text-base md:text-lg px-5 max-w-[400px]">
                      {project.description}
                    </p>
                    <div className="flex gap-4 flex-wrap px-5">
                      {project.tags.map((tag: string, index: number) => {
                        return (
                          <div
                            key={index}
                            className="badge badge-neutral font-bold mr-3 p-3"
                          >
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex gap-4 px-5">
                      {project.links.map((link: LinkType, index: number) => {
                        return (
                          <SimpleLink
                            key={index}
                            label={link.label}
                            src={link.src}
                            ariaLabel={link.ariaLabel}
                            isExternalLink
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="w-full h-full items-center justify-center flex uppercase font-bold font-movement text-4xl"></div>
              </div>
            );
          })}
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
