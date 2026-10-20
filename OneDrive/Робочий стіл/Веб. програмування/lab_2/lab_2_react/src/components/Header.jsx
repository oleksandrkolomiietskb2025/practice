function Header({ theme, toggleTheme }) {
  return (
    <header className="flex flex-col items-center bg-gradient-to-r from-blue-800 to-indigo-600 text-white py-10 px-6 shadow-lg">
      <h1 className="text-4xl font-bold tracking-wide mb-2">Коломієць Олександр</h1>
      <p className="text-xl opacity-90">Студент спеціальності «Кібербезпека»</p>
      <button
        type="button"
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
      >
        {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
      </button>
    </header>
  );
}
export default Header;