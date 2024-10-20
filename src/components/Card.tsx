export const Card = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover aspect-[4/3] "
              src="/images/manon_lespes.webp"
              alt="Manon Lespes - in a train looking trhough the window."
            />
          </figure>
          <div className="card-body px-5 md:px-8">
            <h3 className="card-title">
              This is me, pretending to look pensively at the landscape
            </h3>
            <p>
              Before the pandemic, I was organising events and then I changed my
              career direction and jumped into the digital and IT world. I like
              coding, but also traveling, dancing and reading. But most of all,
              I am fond of my cat. I know, I sound like a cliché.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover aspect-[4/3] bg-fixed"
              src="/images/chatshimi.webp"
              alt="Chatshimi, my lovely spleeping cat."
            />
          </figure>
          <div className="card-body px-5 md:px-8">
            <h2 className="card-title">Chatshimi, the Spleeping Beauty</h2>
            <p>
              Chatshimi sometimes acts as my rubber-cat-debugging. When I'm
              working remotly, she's constantly by my side and even when she's
              taking a 10-hour power nap, she helps me debugg. Rest assured that
              the code is in safe and capable pawls and hands.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
