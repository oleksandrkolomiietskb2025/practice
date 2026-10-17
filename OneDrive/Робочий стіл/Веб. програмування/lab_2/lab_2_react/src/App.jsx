import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <Header />
      <main className="max-w-3xl mx-auto p-6 flex flex-col gap-6">
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;