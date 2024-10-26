import {
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
  NewWindowIcon,
} from "../components/icons/Icons";
import { SimpleLink } from "../components/SimpleLink";

export const About: React.FC = () => {
  return (
    <>
      <section className="px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-18 2xl:px-36 2xl:py-20">
        <div className="bg-base-200 mx-auto w-full max-w-7xl py-4 lg:p-8 rounded md:rounded-xl shadow-lg">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <img
                      alt=""
                      loading="lazy"
                      width="800"
                      height="800"
                      decoding="async"
                      className="aspect-square rotate-3 rounded-2xl bg-base-100 object-cover"
                      sizes="(min-width: 1024px) 32rem, 20rem"
                      src="/images/manon_lespes.webp"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold font-movement bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
                    I’m Manon Lespes.
                  </h1>
                  <p className="text-base">
                    My name is Manon, and I’m a French developer with a unique
                    journey that brought me to the world of tech.
                  </p>
                  <div className="mt-6 space-y-7 text-base">
                    <p>
                      Originally, I moved from Toulouse (South France) to
                      Brussels (Belgium, the big north for me!) to study
                      translation and interpretation. After completing my
                      studies, I fell in love with a Belgian (who is now my
                      husband) and I decided to settle here for a while.
                    </p>

                    <p>
                      My career began in event management, but like many, I
                      found myself rethinking my path during the COVID-19
                      crisis. It was then, alongside my husband, that I decided
                      to set sail for the world of IT. I enrolled in an intense,
                      short-term program at
                      <SimpleLink
                        className="mr-2"
                        label="Interface3"
                        isExternalLink
                        src="https://interface3.be/fr"
                      />
                      , a training center dedicated to empowering women in tech.
                      Shortly after, I started an internship at{" "}
                      <SimpleLink
                        className="mr-2"
                        label="a digital and
                      communication agency"
                        isExternalLink
                        ariaLabel="Visit Spade"
                        src="https://interface3.be/fr"
                      />
                      specialising in accessibility, and my dedication to
                      creating inclusive digital experiences led them to hire me
                      full-time.
                    </p>
                    <p>
                      Accessibility on the web is a cause close to my heart; the
                      internet is a space for everyone, free from
                      discrimination. Lately, I’ve also been drawn to digital
                      eco-design principles, aiming to make technology more
                      "sustainable and responsible". Since the most eco-friendly
                      solution is often the one that doesn’t exist, I make it a
                      point to carefully assess the necessity of each feature,
                      considering whether it’s truly essential or simply a
                      "nice-to-have." Over time, these decisions can make a
                      significant impact.
                    </p>

                    <p>
                      After a decade in Belgium, I feel it’s time for new
                      adventures. And of course, wherever I go, my cat Chatshimi
                      – the first love of my life and my little debugging
                      sidekick – comes along! She’s traveled with me almost
                      everywhere, and I don’t know what I’d do without her by my
                      side.
                    </p>

                    <p>
                      In my free time, you’ll often find me lost in a book (big
                      fan of Robin Hobb!), playing Zelda on my Switch,
                      practicing pole dancing, or drawing with my favorite
                      medium, soft pastels, which I’ve been passionate about
                      since I was seven. I also love exploring new places and
                      cultures. In fact, I’ve studied and worked in Germany
                      (Berlin), Austria (Linz), and Mexico (Cancún).
                    </p>

                    <p>
                      I’m excited to bring my diverse experiences, love for
                      languages, and passion for accessible and sustainable web
                      development to new projects and opportunities.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    <li>
                      <a
                        className="inline-flex items-center text-sm gap-5 group hover:text-accent transition-all self-center ease-in-out focus:text-accent"
                        href="https://github.com/manonlespes"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="(opens in a new tab)"
                      >
                        <GitHubIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out w-6" />
                        <span>
                          Follow me on Github
                          <NewWindowIcon className="h-3 w-3" />
                        </span>
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="inline-flex items-center text-sm gap-5 group hover:text-accent transition-all self-center ease-in-out focus:text-accent"
                        href="https://be.linkedin.com/in/manon-lespes"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="(opens in a new tab)"
                      >
                        <LinkedInIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out w-5" />
                        <span>
                          Follow me on LinkedIn
                          <NewWindowIcon className="h-3 w-3" />
                        </span>
                      </a>
                    </li>

                    <li className="mt-8 border-t border-primary-300 pt-8 flex">
                      <a
                        className="inline-flex items-center text-sm gap-5 group hover:text-accent transition-all ease-in-out self-center focus:text-accent"
                        href="mailto:manonlespes@hotmail.fr"
                      >
                        <EnvelopeIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out w-5" />
                        manonlespes@hotmail.fr
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};