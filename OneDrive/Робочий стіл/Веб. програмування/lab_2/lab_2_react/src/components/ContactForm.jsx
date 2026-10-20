import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button type="button" onClick={() => setIsOpen(false)}>Закрити</button>
        <form action="https://formspree.io/f/xnpjkdzd" method="POST">
          <input type="text" name="name" placeholder="Ім'я" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Номер телефону" required />
          <textarea name="message" placeholder="Повідомлення" required />
          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
}