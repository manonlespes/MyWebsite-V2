import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { TimeLine } from "./components/TimeLine";

const App = () => {
  return (
    <>
      <Navbar />

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/images/anas-alshanti-feXpdV001o4-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
              Hello there, I'm Manon!
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </div>

      <section className=" bg-secondary px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-18">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-sans text-neutral-content block mx-auto w-fit mb-10">
          Who am I
        </h2>
        <Card />
      </section>

      <section className=" bg-accent px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-18">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-sans text-neutral-content block mx-auto w-fit mb-10">
          Experiences
        </h2>
        <TimeLine />
      </section>

      <Footer />
    </>
  );
};

export default App;
