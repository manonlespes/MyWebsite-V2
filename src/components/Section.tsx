import { SectionContentType } from "./types/ComponentsTypes";

const Section = ({
  title,
  text,
  children,
  sectionBackground = "bg-base-200",
  titleColor = "text-accent",
  textColor = "text-base-content",
  padding = "py-4 lg:p-8",
}: SectionContentType) => {
  return (
    <>
      <section className="px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-18 2xl:px-36 2xl:py-20">
        <div
          className={`${sectionBackground} ${padding} mx-auto w-full max-w-7xl rounded md:rounded-xl shadow-lg`}
        >
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="block mx-auto max-w-[800px] w-fit mb-10 text-center">
                <h2
                  className={`${titleColor} text-xl md:text-3xl lg:text-4xl font-bold font-movement block mx-auto w-fit mb-10`}
                >
                  {title}
                </h2>

                <p className={`${textColor} text-sm md:text-base`}>{text}</p>
              </div>

              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
