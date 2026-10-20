function Header({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="flex flex-col items-center bg-gradient-to-r from-blue-800 to-indigo-600 text-white py-10 px-6 shadow-lg">
      <h1 className="text-4xl font-bold tracking-wide mb-2">Коломієць Олександр</h1>
      <p className="text-xl opacity-90">Студент спеціальності «Кібербезпека»</p>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Перемкнути тему"
        className={`relative mt-4 w-16 h-8 rounded-full transition-colors duration-300 cursor-pointer ${
          isDark ? 'bg-slate-700' : 'bg-slate-300'
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow flex items-center justify-center text-sm leading-none transition-transform duration-300 ${
            isDark ? 'translate-x-8' : 'translate-x-0'
          }`}
        >
          {isDark ? '🌙' : '☀️'}
        </span>
      </button>
    </header>
  );
}
export default Header;