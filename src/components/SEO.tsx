/* eslint-disable react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEOtypes } from "./types/ComponentsTypes";
import Logo from "../images/my-logo.webp";

const SEO = ({ props }: { props: SEOtypes }) => {
  const {
    title,
    description,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    meta,
    lang = "en",
    siteName = true,
    ogDescription,
  } = props;

  const { pathname } = useLocation();

  const site = {
    name: siteName,
    url: window.location.href,
    description: description,
    keywords: siteName,
    logo: Logo,
    siteMetadata: {
      title: siteName,
      siteName: "Manon Lespes' Portfolio",
      description:
        "Welcome on my portfolio, where I am introducing myself and the different projects I've been working on so far!",
      siteUrl: window.location.host,
    },
  };

  console.log(site.url);
  console.log(site.siteMetadata.siteUrl);

  const metaDescription = description || site.siteMetadata.description;

  const titleTemplate = siteName ? `%s | ${site.siteMetadata.siteName}` : "%s";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${titleTemplate}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${pathname}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.siteName,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:property`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.siteName}`,
        },
        {
          name: `twitter:description`,
          content: ogDescription || metaDescription,
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      ].concat(meta)}
      link={[
        {
          rel: "canonical",
          href: `https://${site.siteMetadata.siteUrl}${
            pathname === "/" ? "/" : pathname
          }`,
        },
      ]}
    >
      <script type="application/ld+json">
        {`
                    {
                        "@context":"",
                        "@type":"",
                        "name":"Manon Lespes Portfolio",
                        "url":"https://manonlespes.com/",
                        "logo":"https://${site.siteMetadata.siteUrl}/${site.logo}",

                    }
                `}
      </script>
    </Helmet>
  );
};

export default SEO;
