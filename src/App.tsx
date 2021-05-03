import React from 'react';
import './App.css';
import Header from "../src/components/Header";
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="container">
    <Header />
    <HomePage />
    </div>
  );
}

