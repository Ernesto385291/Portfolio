import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { Stack } from "../components/Stack";
import { TopBar } from "../components/TopBar";
import { Writing } from "../components/Writing";
import { getHomeContent } from "../lib/content";

export const revalidate = 3600;

export default async function HomePage() {
  const { posts, projects } = await getHomeContent();

  return (
    <>
      <TopBar />
      <Intro />

      <div className="mt-20">
        <Experience />
      </div>

      <div className="mt-20">
        <Projects data={projects} />
      </div>

      <div className="mt-20">
        <Stack />
      </div>

      <div className="mt-20">
        <Writing data={posts} />
      </div>

      <div className="mt-20">
        <Contact />
      </div>
    </>
  );
}
