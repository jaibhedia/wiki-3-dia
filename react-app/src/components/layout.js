import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './Header';
import './src/index.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Container maxWidth="xl" className="content">
        {children}
      </Container>
    </div>
  );
};

export default Layout;