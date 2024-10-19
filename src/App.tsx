import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const App = () => {
  //const [theme, setTheme] = useState({ isLight: true });
  // const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;

  //   setTheme((prev) => ({
  //     ...prev,
  //     [name]: checked,
  //   }));
  // };

  return (
    <>
      {/* <Navbar toggle={handleToggle} value={theme.isLight} /> */}
      <Navbar />

      {/*  <div className="flex-none">
        <ThemeSwap />
      </div>
 */}
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
            <h1 className="mb-5 text-5xl font-bold">Hello there, I'm Manon!</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </div>

      <section>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
