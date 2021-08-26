import React from 'react'
import './App.css';
function App() {
  return (
    <div>
      <header>
        <nav className="head">
          <ul>
            <li><a>Main</a></li>
            <li><a>Blog</a></li>
            <li><a>About</a></li>
          </ul>
        </nav>
      </header>
      <div className="body">
        <h1> Blog </h1>
        <information></information>
        <div>이상향 속 이상함을 추구🔮</div>
      </div>
    </div>
  );
}

export default App;
