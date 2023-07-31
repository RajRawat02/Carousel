import * as React from 'react';
import Carousel from './Carousal';
import './style.css';
import data from './MockData';

export default function App() {
  return (
    <div>
      <h1>Carousel</h1>
      <Carousel data={data} />
    </div>
  );
}
