import { Photography } from "app/components/Photography";
import { Projects } from "app/components/Projects";
import { Welcome } from "app/components/Welcome";
import { NavBar } from "app/features/NavBar";
import { Profile } from "app/features/Profile";
import { Section } from "app/features/Section";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <Welcome />

        <Section id="profile" title="Profile Summary">
          <Profile />
        </Section>

        <Section id="projects" title="My Projects">
          <Projects />
        </Section>

        <Section id="photography" title="My Photography">
          <Photography />
        </Section>
      </main>
    </>
  );
}
