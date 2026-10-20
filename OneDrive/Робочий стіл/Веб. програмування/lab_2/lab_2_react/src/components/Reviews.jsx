import { useState, useEffect } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/12/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <section id="reviews">
      <h2>Відгуки</h2>
      {comments.map((c) => (
        <div className="review" key={c.id}>
          <h3>{c.name}</h3>
          <p><i>{c.email}</i></p>
          <p>{c.body}</p>
        </div>
      ))}
    </section>
  );
}