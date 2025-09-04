import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="HubSpot CRM Integration"
          main="Built a full-stack web app that connects with HubSpot using OAuth 2.0. It allows users to fetch and display contacts directly in the frontend using React, providing a smooth and interactive CRM experience."
        />
        <ProjectCard
          title="Prior Authorization Dashboard"
          main="Developed a dashboard to manage prior authorization requests. It helps track patient details, request status, and approvals in a simple and user-friendly interface built with React and Tailwind CSS."
        />
        <ProjectCard
          title="Backend & API"
          main="Developed REST APIs using Node.js and Express.

Managed MongoDB database, implemented CRUD operations, and handled data validation.

Integrated third-party APIs for real-time data processing and automation."
        />
      </div>
    </div>
  );
};

export default Projects;
