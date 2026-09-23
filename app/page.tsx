'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import AboutStats from './aboutStats/AboutStats';
import Contact from './contact/Action';

import Projects from './projects/page';
import FadeInSection from './FadeInSection/FadeInSection';

import { useMemo } from 'react';
export default function Home() {






  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'minmax(0, 1fr)',
          md: '1.1fr 0.9fr',
        },
        gap: { xs: 6, md: 4 },
        alignItems: 'center',
        minHeight: '85vh',
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 0 },
        mt: { xs: 1, md: 6 },
      }}
      id="about"

    >
      {/* Left: identity */}
      <Box>

        <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1, }}>
          Mohammed Haris
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ fontFamily: 'var(--font-display)', mt: 1, mb: 3 }}>
          Software Engineer
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: { xs: 400, sm: 460, md: '100%' }, color: 'text.secondary', lineHeight: 1.7, mb: 4, fontFamily: 'var(--font-display)' }}>
          I&apos;m a Frontend Developer with 3.5+ years of experience architecting and building modern, scalable, high-performance web applications — proficient in React.js, JavaScript (ES6+), Next.js, TypeScript, Git and Tensorflow.js. My focus is translating Figma UI/UX designs into pixel-perfect, responsive interfaces with clean, component-based architecture.

        </Typography>
        <Typography variant="body1" sx={{ maxWidth: { xs: 400, sm: 460, md: '100%' }, color: 'text.secondary', lineHeight: 1.7, mb: 4, fontFamily: 'var(--font-display)' }}>

          I&apos;ve delivered 20+ internal and client-facing applications end-to-end — from design handoff to production deployment — integrating RESTful APIs and keeping every experience consistent across devices and browsers.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: { xs: 400, sm: 460, md: '100%' }, color: 'text.secondary', lineHeight: 1.7, mb: 4, fontFamily: 'var(--font-display)' }}>
          Beyond code, I own code reviews, mentoring, and sprint planning for junior developers, and I&apos;ve improved application performance by up to 20% through refactoring, lazy loading, and optimizing 5,000+ media assets.
        </Typography>


        <Stack direction="row" spacing={2}>
          <Button variant="contained" size="large" component={Link} href="/projects" color="primary" sx={{
            transform: 'translateY(0px)',
            '&:hover': {
              backgroundColor: 'background.paper',
              color: 'text.primary',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s ease',
            },
          }}>
            View my work
          </Button>
          <Button variant="outlined" size="large" component={Link} href="/contact" color="text.secondary">
            Get in touch
          </Button>
        </Stack>
      </Box>

      {/* Right: terminal card — the one memorable element */}
      <Box
        sx={{
          bgcolor: '#16181D',
          borderRadius: 2,
          p: 3,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          color: '#E4E4E7',
          boxShadow: '0 20px 60px -20px rgba(0,0,0,0.35)',
        }}
      >
        <Stack direction="row" spacing={0.7} sx={{ mb: 2 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FF5F57' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FEBC2E' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#28C840' }} />
        </Stack>

        <Box component="pre" sx={{ m: 0, whiteSpace: 'pre-wrap' }}>
          {`$ whoami

name     Mohammed Haris
role     Software Engineer
stack    Next.js · React · Node
status   open to work`}
        </Box>

      </Box>
      <FadeInSection>
        <AboutStats />
      </FadeInSection>

      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        mt: 4,
        px: { xs: 0, md: 0 },
        py: { xs: 8, md: 0 },

      }}>
        <FadeInSection>
          <Projects />
        </FadeInSection>

      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

        mt: 4,
        px: { xs: 0, md: 0 },
        py: { xs: 8, md: 0 },
        gridColumn: '1 / -1',

      }}>
        <FadeInSection>
          <Contact />
        </FadeInSection>

      </Box>



    </Box>

  );
}