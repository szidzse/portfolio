import React from "react";
import { projectSchema } from "@/lib/schemas";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

interface Props {
  limit?: number;
}

const Projects = ({ limit }: Props) => {
  let projects = projectSchema.parse(projectsData).projects;
  if (limit) {
    projects = projects.slice(0, limit);
  }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project, id) => (
        <ProjectCard key={id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
