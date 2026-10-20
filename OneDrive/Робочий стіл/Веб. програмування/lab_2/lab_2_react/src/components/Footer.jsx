import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    // зберігаємо в localStorage
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    // зчитуємо з localStorage для відображення
    setSysInfo({
      userAgent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform'),
    });
  }, []);

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

        <div className="mt-6 pt-4 border-t border-slate-600 text-sm text-slate-400">
          <p><b>userAgent:</b> {sysInfo.userAgent}</p>
          <p><b>platform:</b> {sysInfo.platform}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;