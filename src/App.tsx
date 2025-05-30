import "./App.css";
import NebulaHero from "./components/hero/NebulaHero";
import About from "./components/hero/About";
import GitHubShowcase from "./components/hero/GitHubShowcase";
import EventsSection from "./components/EventsSection";
import TeamPage from "./components/hero/TeamPage";

function App() {
  return (
    <>
      <NebulaHero />
      <About />
      <GitHubShowcase />
      <EventsSection />
      <TeamPage />
    </>
  );
}

export default App;
