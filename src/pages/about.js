import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
            BigReach is a full-service boutique web agency. We custom fit solutions to fit the individual needs of            our clients. If you can dream it BigReach can bring it. Sometimes our clients aren't even sure of what
            they want, they just know they need it yesterday.
            Thats okay, Lets Talk!
          </blockquote>

          <cite className="font-bold mt-4 text-right text-xs uppercase block">
            – Big Reach
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img src={dogIllustration} alt="A dog relaxing" />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
