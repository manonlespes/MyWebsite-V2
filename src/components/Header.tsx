const Header = ({ title }: { title: string }) => {
  return (
    <>
      <section className="block w-fit m-auto bg-base-100 h-fit">
        <div className="p-5 md:p-10 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-movement bg-clip-text text-transparent bg-gradient-to-r from-accent to-info">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default Header;
