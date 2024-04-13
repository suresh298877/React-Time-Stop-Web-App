import React, { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const startBtn = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prev) => prev + 10); // Update every 10 milliseconds
      }, 10); // Update every 10 milliseconds
      setIntervalId(id);
      setIsPaused(false);
    }
  };

  const pauseBtn = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsPaused(true);
  };

  const resetBtn = () => {
    clearInterval(intervalId);
    setTime(0);
    setIntervalId(null);
    setIsPaused(false);
  };

  const resumeBtn = () => {
    startBtn();
  };

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return `${hours}hr : ${minutes}m : ${seconds}s : ${milliseconds}ms`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Stop Watch</h1>
      <p style={styles.time}>{formatTime(time)}</p>
      {time === 0 && <button style={styles.button} onClick={startBtn}>Start</button>}
      {time > 0 && !isPaused && <button style={styles.button} onClick={pauseBtn}>Pause</button>}
      {time > 0 && isPaused && <button style={styles.button} onClick={resumeBtn}>Resume</button>}
      <button style={styles.button} onClick={resetBtn}>Reset</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    margin: 'auto',
    width: '50%',
    marginTop: '100px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  time: {
    fontSize: '18px',
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
  },
};

export default App;
