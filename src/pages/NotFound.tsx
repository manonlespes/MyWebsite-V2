import { Button } from "../components/Button";
import SEO from "../components/SEO";
import { MetaTag, SEOtypes } from "../components/types/ComponentsTypes";

const NotFound: React.FC = () => {
  const descriptionContent: string =
    "Upsi daisy, something went wrong. We couldn't find what you were looking for.";

  const meta: (
    | MetaTag
    | { name: string; content: string }
    | { property: string; content: string }
  )[] = [
    {
      name: "description",
      content: descriptionContent,
    },
    { name: "keywords", content: "page not found, web developer" },
    { property: "og:title", content: "Not Found" },
    {
      property: "og:description",
      content: descriptionContent,
    },
  ];

  const seo: SEOtypes = {
    title: "Not Found",
    description: descriptionContent,
    meta: meta,
    ogDescription: descriptionContent,
  };
  return (
    <>
      <SEO props={seo} />
      <div className="h-screen w-screen bg-base-200 flex items-center">
        <div className="container flex flex-col items-center justify-center px-5">
          <div className="max-w-md">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-accent font-movement font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
              Not Found
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-movement leading-normal">
              Sorry we couldn&apos;t find this page.
            </p>
            <p className="my-5 text-sm md:text-base">
              But dont worry, you&apos;ll look your way to go back home.
            </p>
            <p className="w-fit h-fit !overflow-hidden rounded-md">
              <Button label="Home" isLink linkTo="/" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
