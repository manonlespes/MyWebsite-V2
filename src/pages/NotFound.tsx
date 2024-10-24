import { Button } from "../components/Button";

export const NotFound: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen bg-base-200 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5">
          <div className="max-w-md">
            <h1 className="text-7xl text-accent font-movement font-bold">
              404
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-movement leading-normal">
              Sorry we couldn't find this page.
            </p>
            <p className="mt-5 mb-8">
              But dont worry, you can find plenty of other things on the
              homepage.
            </p>

            <Button label="Go back" />
          </div>

          <div className="max-w-lg">{/* TODO add img */}</div>
        </div>
      </div>
    </>
  );
};
