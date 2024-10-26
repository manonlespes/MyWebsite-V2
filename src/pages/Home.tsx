import { Card } from "../components/Card";
import { TimeLine } from "../components/TimeLine";
import { CardContentType } from "../components/types/ComponentsTypes";

export const Home: React.FC = () => {
  return (
    <>
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/background_img.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex flex-col lg:flex-row w-full justify-evenly">
          <img
            className="mask mask-hexagon-2 w-[750px]"
            src="/images/front_end_img.webp"
          />
          <div className="max-w-sm text-center lg:max-w-md lg:text-left">
            <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold font-movement bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Hello there, I'm Manon!
            </h1>

            <p className="mb-5 text-neutral-content">
              A front-end developer, eager to code with passion your project.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-18 2xl:px-36 2xl:py-20">
        <div className="bg-base-200 mx-auto w-full max-w-7xl py-4 lg:p-8 rounded md:rounded-xl shadow-lg">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="block mx-auto max-w-[800px] w-fit mb-10 text-center">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-movement text-accent block mx-auto w-fit mb-10">
                  Hello World
                </h2>

                <p className="text-base-content text-base">
                  I've been diving in the world of IT for 3 years now, and I
                  can't help but go further.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20">
                {aboutContentCards.map(
                  (card: CardContentType, index: number) => {
                    return (
                      <div
                        key={index}
                        className="relative flex flex-col rounded-xl bg-neutral bg-clip-border text-neutral-content shadow-md"
                      >
                        <Card
                          title={card.title}
                          text={card.text}
                          img={card.img}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-18 2xl:px-36 2xl:py-20">
        <div className="bg-secondary mx-auto w-full max-w-7xl py-4 lg:p-8 rounded md:rounded-xl shadow-lg">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="block mx-auto max-w-[800px] w-fit mb-10 text-center">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-movement text-neutral-content block mx-auto w-fit mb-10">
                  Experiences
                </h2>

                <p className="text-neutral-content text-base">
                  My "previous life" was completly different. Events organiser,
                  community manager, translator and Front-end developer have few
                  in common. There is, however, one consistency in my career
                  path: the aim of creating bridges between different parties,
                  using one or more communication channels to convey
                  information, and this is exactly where I have always put my
                  skills to good use and where my strength lies.
                </p>
              </div>
              <TimeLine />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const aboutContentCards: CardContentType[] = [
  {
    title: "This is me, pretending to look pensively at the landscape",
    text: "Before the pandemic, I was organising events and then I changed my career direction and jumped into the digital and IT world. I like coding, but also traveling, dancing and reading. But most of all, I am fond of my cat. I know, I sound like a cliché.",
    img: {
      alt: "Manon Lespes - in a train looking trhough the window.",
      source: "/images/manon_lespes.webp",
    },
  },
  {
    title: "Chatshimi, the Spleeping Beauty",
    text: " Chatshimi sometimes acts as my rubber-cat-debugging. When I'm working remotly, she's constantly by my side and even when she's taking a 10-hour power nap, she helps me debugg. Rest assured that the code is in safe and capable pawls and hands.",
    img: {
      alt: "Chatshimi, my lovely spleeping cat.",
      source: "/images/chatshimi.webp",
    },
  },
];
