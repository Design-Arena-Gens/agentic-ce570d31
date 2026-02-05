import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Hello there!');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setMessage('Nice to meet you! 👋');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>{message}</h1>
        <p style={styles.text}>Welcome to your friendly web app</p>
        {!clicked && (
          <button style={styles.button} onClick={handleClick}>
            Say Hi Back
          </button>
        )}
        {clicked && (
          <p style={styles.emoji}>😊</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '60px 80px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    textAlign: 'center',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '48px',
    margin: '0 0 20px 0',
    color: '#333',
    fontWeight: '700',
  },
  text: {
    fontSize: '20px',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    padding: '15px 40px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)',
    },
  },
  emoji: {
    fontSize: '60px',
    margin: '20px 0 0 0',
  },
};
