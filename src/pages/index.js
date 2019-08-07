import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import building from "../images/building.svg";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`dev team`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="text-center">
        <img
          src={building}
          className="block mx-auto w-1/2"
          alt="big-reach-office"
        />

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Your personal software-application consultancy.
        </h2>

        <p className="leading-loose">
          This is the part where you reach out to our pleasant staff to setup a
          meeting with our ever eager to please CTO
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
