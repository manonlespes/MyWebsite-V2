import { Button } from "../components/Button";
import SEO from "../components/SEO";
import { SEOtypes } from "../components/types/ComponentsTypes";

const NotFound: React.FC = () => {
  const seo: SEOtypes = {
    title: "Not Found",
    description:
      "Upsi daisy, something went wrong. We couldn't find what you were looking for.",
    meta: [],
    ogDescription:
      "Upsi daisy, something went wrong. We couldn't find what you were looking for.",
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
              Sorry we couldn't find this page.
            </p>
            <p className="my-5 text-sm md:text-base">
              But dont worry, you'll look your way to go back home.
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
