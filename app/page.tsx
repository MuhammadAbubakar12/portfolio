import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 Muhammad Abubakar. All rights reserved.</p>
      </footer>
    </main>
  );
}
