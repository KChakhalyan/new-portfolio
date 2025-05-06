import About from './sections/About';
import Contact from './sections/Contact';
import Cooperation from './sections/Cooperation';
import Feedback from './sections/Feedback';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Feedback />
      <Cooperation />
      <Contact />

    </>
  );
}
