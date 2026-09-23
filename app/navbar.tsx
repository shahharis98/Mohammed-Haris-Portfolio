'use client';

import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';


import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];



export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
      const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  

  const handleLinkClick = () => {
    setMobileOpen(false); // close drawer after clicking a link
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ px: { xs: 0, md: 7 }, py: { xs: 8, md: 1 } }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1.2} sx={{alignItems:'center'}}>


          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: 1,
              bgcolor: '#16181D',
              color: '#4338CA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              fontSize: '0.85rem',
            }}
          >
            MH
          </Box>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}
          >
            Mohammed Haris
          </Typography>
        </Stack>


        <Stack direction="row" spacing={1}>
          
             { !isMobile? navLinks.map((link) => (
            <Button key={link.href} color="inherit" component="a" href={link.href}>
              {link.label}
            </Button>
          )) :    
        <IconButton
          color="inherit"
          edge="end"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

          }

        
  


        </Stack>
      </Toolbar>
        {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '75%',
            maxWidth: 300,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={handleLinkClick}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}