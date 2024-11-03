import { useRef } from "react";
import { Button } from "../components/Button";
import emailJs from "@emailjs/browser";

import SEO from "../components/SEO";
import { SEOtypes } from "../components/types/ComponentsTypes";
import Header from "../components/Header";
import Section from "../components/Section";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const seo: SEOtypes = {
    title: "Contact",
    description: "Any questions or just wanna talk? Write me here!",
    meta: [],
    ogDescription: "Any questions or just wanna talk? Write me here!",
  };

  const sectionContent = {
    title: "Drop me a line",
    text: "Wanna say hello, well you are at the right place!",
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = form.current;
    // this prevents sending emails if there is no form.

    if (currentForm == null) return;

    const serviceId = "service_qftjjw5";
    const templateId = "template_38jutcs";
    const publicKey = "Lbu16oVY-0yb-Qbk6";

    emailJs.sendForm(serviceId, templateId, currentForm, publicKey).then(
      (_result) => {
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );

    e.target.reset();
  };
  return (
    <>
      <SEO props={seo} />

      <Header title="Contact" />

      <Section {...sectionContent}>
        <div className="block mx-auto max-w-[500px]">
          <form
            ref={form}
            className="flex flex-col gap-5 "
            onSubmit={sendEmail}
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                required
                type="text"
                className="grow text-sm md:text-base"
                placeholder="Email"
                name="email_address"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                required
                type="text"
                className="grow text-sm md:text-base"
                placeholder="Name"
                name="full_name"
              />
            </label>

            <label className="flex">
              <input
                required
                type="text"
                placeholder="Subject"
                className="input grow input-bordered text-sm md:text-base"
                name="subject"
              />
            </label>

            <textarea
              required
              className="textarea textarea-bordered min-h-48 text-sm md:text-base"
              placeholder="Your message here"
              name="message"
            ></textarea>

            <Button className="w-32" label="Send" />
          </form>
        </div>
      </Section>
    </>
  );
};

export default Contact;
