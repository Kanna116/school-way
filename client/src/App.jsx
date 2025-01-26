import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Welcome to the App</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
