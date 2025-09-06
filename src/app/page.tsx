import React from "react";

const BIRTH_YEAR = 2000;

const Home = () => {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        // TODO: create a carousel component for images
        <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="title text-balance text-4xl sm:text-5xl">
            hi Gellért here 👋🏻
          </h1>

          <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">
            {new Date().getFullYear() - BIRTH_YEAR} year old DevOps engineer
            from Hungary 🇭🇺
          </p>

          <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
            DevOps is not a goal, but a never-ending process of continual
            improvement.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Home;
