import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((currentCount) => currentCount + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <main className="app-shell">
      <section className="counter-panel" aria-labelledby="page-title">
        <div className="panel-heading">
          <p className="eyebrow">Live tally</p>
          <h1 id="page-title">Button Counter App<span className="period">.</span></h1>
          <p className="intro">Hello user, welcome to the app.</p>
        </div>

        <div className="count-display" aria-live="polite" aria-atomic="true">
          <span className="count-label">Total presses</span>
          <strong>{count}</strong>
        </div>

        <button className="press-button" type="button" onClick={incrementCount}>
          Press me
          <span aria-hidden="true">+</span>
        </button>

        <button className="reset-button" type="button" onClick={resetCount} disabled={count === 0}>
          Reset count
        </button>
      </section>
      <p className="footer-note">Your count updates instantly.</p>
    </main>
  );
}

export default App;