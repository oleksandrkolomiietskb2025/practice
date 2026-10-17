function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 py-8 px-6 mt-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-3">Контакти</h2>
        <ul className="flex flex-col gap-2">
          <li>
            Email:{' '}
            <a
              href="mailto:oleksandr.kolomiiets.kb.2025@lpnu.ua"
              className="text-sky-400 hover:text-sky-300 hover:underline"
            >
              oleksandr.kolomiiets.kb.2025@lpnu.ua
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/oleksandrkolomiietskb2025"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300 hover:underline"
            >
              github.com/oleksandrkolomiietskb2025
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;