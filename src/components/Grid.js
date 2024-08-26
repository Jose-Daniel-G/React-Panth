// Container.js
import React from 'react';

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Col.js
export const Col = ({ children, size }) => {
  return <div className={`col-${size}`}>{children}</div>;
};

// Row.js
export const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};

