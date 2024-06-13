import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='cars'>
      <button className='btn'>Cars</button>
    </Link>
  );
}