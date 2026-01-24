import { FormEvent, useRef, useState } from "react";
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

  const [errors, setErrors] = useState({
    email: "",
    fullName: "",
    subject: "",
    message: "",
  });
  const errorSummaryRef = useRef<HTMLDivElement | null>(null);
  const hasErrors = Object.values(errors).some(Boolean);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    // this prevents sending emails if there is no form.
    if (currentForm == null) return;

    let valid = true;
    const newErrors = { email: "", fullName: "", subject: "", message: "" };

    const formElements = currentForm.elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement | HTMLTextAreaElement;

      switch (element.name) {
        case "email_address":
          if (!element.value) {
            newErrors.email = "Email is required.";
            valid = false;
          }
          break;

        case "full_name":
          if (!element.value) {
            newErrors.fullName = "Your full name is required.";
            valid = false;
          }
          break;

        case "subject":
          if (!element.value) {
            newErrors.subject = "A subject is required.";
            valid = false;
          }
          break;

        case "message":
          if (!element.value) {
            newErrors.message = "A message is required.";
            valid = false;
          }
          break;

        default:
          break;
      }
    }

    setErrors(newErrors);

    if (!valid) {
      requestAnimationFrame(() => {
        errorSummaryRef.current?.focus();
      });
      return;
    }

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

    currentForm.reset();
    setErrors({ email: "", fullName: "", subject: "", message: "" });
  };
  return (
    <>
      <SEO props={seo} />

      <Header title="Contact" />

      <Section {...sectionContent}>
        <div className="flex flex-col gap-6 justify-center mx-auto max-w-[500px]">
          {hasErrors && (
            <>
              <div
                ref={errorSummaryRef}
                tabIndex={-1}
                role="alert"
                aria-live="polite"
                aria-atomic
                className="p-3 bg-transparent border-accent border-2 rounded-md"
              >
                <p className="text-sm md:text-base mt-0">
                  Your message could not be sent. Please check the inputs below.
                </p>
              </div>
            </>
          )}

          <form ref={form} className="flex flex-col gap-5" onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="email"
                className="input input-bordered flex items-center gap-2"
              >
                Email (required)
                <input
                  aria-required
                  id="email"
                  type="text"
                  className="grow text-sm md:text-base"
                  name="email_address"
                  autoComplete="email"
                  aria-describedby="email-error"
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </label>

              {errors.email && (
                <p
                  id="email-error"
                  className="text-accent text-md font-bold mt-2"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="input input-bordered flex items-center gap-2"
              >
                Name (required)
                <input
                  aria-required
                  id="fullName"
                  type="text"
                  className="grow text-sm md:text-base"
                  name="full_name"
                  autoComplete="name"
                  aria-describedby="name-error"
                  aria-invalid={errors.fullName ? "true" : "false"}
                />
              </label>

              {errors.fullName && (
                <p
                  id="name-error"
                  className="text-accent text-md font-bold mt-2"
                >
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="input input-bordered flex items-center gap-2"
              >
                Subject (required)
                <input
                  aria-required
                  id="subject"
                  type="text"
                  className="grow text-sm md:text-base"
                  name="subject"
                  aria-describedby="subject-error"
                  aria-invalid={errors.subject ? "true" : "false"}
                />
              </label>

              {errors.subject && (
                <p
                  id="subject-error"
                  className="text-accent text-md font-bold mt-2"
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label className="form-control" htmlFor="message">
                <div className="label">
                  <span className="grow text-sm">Your message (required)</span>
                </div>
                <textarea
                  aria-required
                  id="message"
                  name="message"
                  className="textarea textarea-bordered min-h-48 text-sm md:text-base"
                  aria-describedby="message-error"
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
              </label>

              {errors.message && (
                <p
                  id="message-error"
                  className="text-accent text-md font-bold mt-2"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <Button className="w-32" label="Send" />
          </form>
        </div>
      </Section>
    </>
  );
};

export default Contact;
