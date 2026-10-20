// 1. ОС/браузер -> localStorage -> футер
const info = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  vendor: navigator.vendor,
  cookieEnabled: navigator.cookieEnabled,
  online: navigator.onLine,
  screen: `${screen.width}x${screen.height}`,
  cores: navigator.hardwareConcurrency,
};
Object.entries(info).forEach(([k, v]) => localStorage.setItem(k, v));

const footer = document.getElementById('footer');
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  footer.insertAdjacentHTML('beforeend', `<p><b>${key}:</b> ${localStorage.getItem(key)}</p>`);
}

// 2. Коментарі з сервера
async function loadReviews() {
  const list = document.getElementById('reviewsList');
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/12/comments');
    const data = await res.json();
    data.forEach(c => {
      list.insertAdjacentHTML('beforeend',
        `<div class="review"><h3>${c.name}</h3><p><i>${c.email}</i></p><p>${c.body}</p></div>`);
    });
  } catch (e) {
    console.error('Error:', e);
  }
}
loadReviews();

// 3. Модалка через 1 хв
const modal = document.getElementById('modal');
setTimeout(() => modal.classList.remove('hidden'), 3000);
document.getElementById('closeModal')
  .addEventListener('click', () => modal.classList.add('hidden'));

// 4. Тема
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}
const hour = new Date().getHours();
let theme = hour >= 7 && hour < 21 ? 'light' : 'dark';
applyTheme(theme);

document.getElementById('themeToggle').addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  applyTheme(theme);
});