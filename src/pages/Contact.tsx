import { FormEvent, useRef } from "react";
import { Button } from "../components/Button";
import emailJs from "@emailjs/browser";

import SEO from "../components/SEO";
import { SEOtypes } from "../components/types/ComponentsTypes";
import Header from "../components/Header";
import Section from "../components/Section";

const Contact: React.FC = () => {
  const descriptionContent: string =
    "Any questions or just wanna talk? Write me here!";

  const meta: (
    | { name: string; content: string }
    | { property: string; content: string }
  )[] = [
    {
      name: "description",
      content: descriptionContent,
    },
    {
      name: "keywords",
      content: "contact, web developer",
    },
    { property: "og:title", content: "Contact" },
    {
      property: "og:description",
      content: descriptionContent,
    },
  ];

  const seo: SEOtypes = {
    title: "Contact",
    description: descriptionContent,
    meta: meta,
    ogDescription: descriptionContent,
  };

  const sectionContent = {
    title: "Drop me a line",
    text: "Wanna say hello? Well you are at the right place!",
  };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    // this prevents sending emails if there is no form.

    if (currentForm == null) return;

    const serviceId = "service_qftjjw5";
    const templateId = "template_38jutcs";
    const publicKey = "Lbu16oVY-0yb-Qbk6";

    emailJs.sendForm(serviceId, templateId, currentForm, publicKey).then(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_result) => {
        alert("Message Sent Successfully");
      },
      (error: { text: string }) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );

    (e.target as HTMLFormElement).reset();
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
            <label
              htmlFor="email"
              className="input input-bordered flex items-center gap-2"
            >
              Email (required)
              <input
                required
                id="email"
                type="text"
                className="grow text-sm md:text-base"
                name="email_address"
                autoComplete="email"
              />
            </label>

            <label
              htmlFor="fullName"
              className="input input-bordered flex items-center gap-2"
            >
              Name (required)
              <input
                required
                id="fullName"
                type="text"
                className="grow text-sm md:text-base"
                name="full_name"
                autoComplete="name"
              />
            </label>

            <label
              htmlFor="subject"
              className="input input-bordered flex items-center gap-2"
            >
              Subject (required)
              <input
                required
                id="subject"
                type="text"
                className="grow text-sm md:text-base"
                name="subject"
              />
            </label>

            <label className="form-control" htmlFor="message">
              <div className="label">
                <span className="grow text-sm">Your message (required)</span>
              </div>
              <textarea
                required
                id="message"
                name="message"
                className="textarea textarea-bordered min-h-48 text-sm md:text-base"
                placeholder="Your message here"
              ></textarea>
            </label>

            <Button className="w-32" label="Send" />
          </form>
        </div>
      </Section>
    </>
  );
};

export default Contact;
