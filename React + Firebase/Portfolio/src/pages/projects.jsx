import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/Icons";
import AnimatedText from "@/components/AnimatedText";
import crud from "../../public/images/projects/CRUD.png";
import disney from "../../public/images/projects/Disney.PNG";
import calculator from "../../public/images/projects/calculator.PNG";
import managmentSystem from "../../public/images/projects/user-managment-system.PNG";
import portfolio from "../../public/images/projects/portfolio.PNG";
import TransitionEffect from "@/components/TransitionEffect";

const FramerMotion = motion(Image);

const FeaturedProject = ({ img, type, title, summary, github, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border rounded-br-2xl border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerMotion
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 786px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:hover:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ img, type, title, github, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerMotion
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 786px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold dark:text-light dark:underline-light md:text-base"
          >
            Visit
          </Link>

          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-16 !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={disney}
                type={"Featured Project"}
                title={"Disney+ Clone"}
                summary={
                  "Creating a disney plus web app with Next.js, Typescript, Tailwind CSS, and Shadcn-UI to practice of Next Auth."
                }
                github={"https://github.com/sikander-nawaz/Disney-Colne"}
                link={"https://github.com/sikander-nawaz/Disney-Colne"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                img={portfolio}
                type={"Featured Project"}
                title={"Next_JS Portfolio"}
                summary={
                  "Creating a portfolio web app with Next.js, Tailwind CSS, and Framer Motion is an excellent way to practice my skills and showcase my work."
                }
                github={"https://github.com/sikander-nawaz/Portfolio"}
                link={"https://sikander-nawaz.vercel.app"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                img={crud}
                type={"Featured Project"}
                title={"CRUD_MERN Web App"}
                summary={
                  "CRUD MERN application for streamlined employee management, allowing seamless creation, retrieval, updating, and deletion of employee records."
                }
                github={"https://github.com/sikander-nawaz/CRUD_MERN"}
                link={"www.github.com/sikander-nawaz"}
              />
            </div>
          </div>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Other Projects
          </h2>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                img={managmentSystem}
                type={"Local Storage Project"}
                title={"User Managment System"}
                github={"https://github.com/sikander-nawaz/Local_Storage.git"}
                link={"https://assignment-saylani-localstorage.netlify.app/"}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                img={calculator}
                type={"Mini Project"}
                title={"Scientific Calculator"}
                github={"https://github.com/sikander-nawaz/Assignment_14.git"}
                link={"https://javascript-calculator-assignment.netlify.app/"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
