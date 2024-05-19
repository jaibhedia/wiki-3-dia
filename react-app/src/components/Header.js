import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '../components/css/glassEffect.css'; // Import the CSS file

const Header = () => {
  // Initialize state with the value from browser storage or default to false
  const [, setIsGlassEffectEnabled] = useState(() => {
    const storedValue = localStorage.getItem('isGlassEffectEnabled');
    return storedValue !== null ? JSON.parse(storedValue) : true; // Default to true if no value is found
  });

  // Store the state in browser storage whenever it changes
  useEffect(() => {
    const storedGlassEffectState = localStorage.getItem('isGlassEffectEnabled');
    if (storedGlassEffectState !== null) {
      setIsGlassEffectEnabled(JSON.parse(storedGlassEffectState));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppBar position="static" id="glass-effect">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none">
              <div className="logo-container">
                <img src={'/WikIIIpedia.png'} alt="Wiki3dia" className="logo-img" />
              </div>
            </Link>
          </Typography>
          {/* Add any other header content here */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
