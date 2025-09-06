import React from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";

const BIRTH_YEAR = 2000;
const LIMIT = 2;

const Home = () => {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        {/* TODO: create a carousel component for images */}
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

          <div className="mt-6 flex items-center gap-1">
            <p className="text-balance text-sm font-semibold sm:text-base">
              For Q&A, start a chat with Gellért Bot
            </p>
            <ArrowDownRight className="hidden size-5 animate-bounce sm:block" />
            <ArrowDown className="block size-5 animate-bounce sm:hidden" />
          </div>

          <section className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      {/* TODO: create new section for blog posts */}
    </article>
  );
};

export default Home;
