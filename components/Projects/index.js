import React from "react"
import ReadMoreAndLess from "react-read-more-less"

import {
  Container,
  Content,
  ProjectContainer,
  Headings,
  Title,
  Subtitle,
  ProjectTitle,
  ProjectDetails,
  ProjectLink,
} from "./styles"

export const Projects = ({ data }) => {
  console.log(data)
  return (
    <Container>
      <Headings>
        <Title>Projects</Title>
        <Subtitle>
          These are some of the projects I have been working on
        </Subtitle>
      </Headings>
      <Content>
        {data.map((project) => {
          return (
            <Project
              name={project.Project_Title}
              details={project.Description}
              link={project.Project_URL}
            />
          )
        })}
      </Content>
    </Container>
  )
}

const Project = ({ name, details, link, technologies }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{name}</ProjectTitle>
      {/* <ProjectCircle color="blue" /> */}
      <ProjectDetails>
        <ReadMoreAndLess
          charLimit={90}
          readMoreText="Read more"
          readLessText="Read less"
        >
          {details}
        </ReadMoreAndLess>
      </ProjectDetails>
      <ProjectLink href={link} target="_blank">
        Project →
      </ProjectLink>
    </ProjectContainer>
  )
}
