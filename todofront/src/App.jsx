import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import CreatePage from './pages/CreatePage';
import DisplayPage from './pages/DisplayPage';
import UpdatePage from './pages/UpdatePage';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
