import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  // Авто-тема за часом: 07:00–21:00 день, інакше ніч
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  // Застосування класу до body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div
      className={`min-h-screen font-sans ${
        theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-800'
      }`}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-3xl mx-auto p-6 flex flex-col gap-6">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Reviews />
      </main>
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;