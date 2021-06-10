import React from "react";
import ReadMoreAndLess from "react-read-more-less";

export const Projects = ({ data }) => {
  return (
    <section className="mx-4 text-center lg:mx-40" id="projects">
      <div className="mt-4 mb-12">
        <h2 className="text-4xl mb-4 dark:text-white">Projects</h2>
        <p className="text-sm text-gray-500 dark:text-white">
          These are some of the projects I have been working on
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.Project_Title}
              details={project.Description}
              link={project.Project_URL}
            />
          );
        })}
      </div>
    </section>
  );
};

const Project = ({ name, details, link, technologies }) => {
  return (
    <div className="cursor-pointer p-6 border-gray-200 border-solid rounded-md border text-left flex-1 flex flex-col duration-200 hover:duration-200 hover:shadow-md">
      <h1 className="font-medium text-base my-4 dark:text-white">{name}</h1>
      {/* <ProjectCircle color="blue" /> */}
      <div className="text-sm dark:text-white">
        <ReadMoreAndLess
          charLimit={90}
          readMoreText="Read more"
          readLessText="Read less"
        >
          {details}
        </ReadMoreAndLess>
      </div>
      <a
        className="no-underline text-blue-500 my-4 duration-200 hover:underline hover:duration-200"
        href={link}
        target="_blank"
      >
        Project →
      </a>
    </div>
  );
};
