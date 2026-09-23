'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contactItems = [
  { icon: EmailIcon, label: 'mohammedharisx@gmail.com', copyValue: 'hs6043811@gmail.com', href: null },
  { icon: PhoneIcon, label: '+91 9149438230', copyValue: '+91 9149438230', href: null },
  { icon: LinkedInIcon, label: 'www.linkedin.com/in/mohammed-haris-shah-0976161b6', copyValue: null, href: 'www.linkedin.com/in/mohammed-haris-shah-0976161b6' },
];

function ContactRow({ icon: Icon, label, copyValue, href }: {
  icon: typeof EmailIcon;
  label: string;
  copyValue: string | null;
  href: string | null;
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    if (href) {
      window.open(href, '_blank');
      return;
    }
    if (copyValue) {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <Stack
      direction="row"



      spacing={2}
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        py: 2.5,
        borderBottom: '1px solid rgba(255,255,255,0.12)',
        '&:hover .contact-label': { color: '#818CF8' },
        justifyContent: 'center',
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 1,
          bgcolor: 'rgba(67, 56, 202, 0.25)',
          color: '#818CF8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon fontSize="small" />
      </Box>

      <Typography
        className="contact-label"
        sx={{ fontFamily: 'var(--font-mono)', fontSize: { xs: '0.6rem', md: '1rem' }, color: '#E4E4E7', transition: 'color 0.15s ease' }}
      >
        {label}
      </Typography>

      <Typography
        variant="caption"
        sx={{ ml: 'auto !important', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.45)',fontSize: { xs: '0.6rem', md: '1rem' } }}
      >
        {href ? 'open →' : copied ? 'copied!' : 'click to copy'}
      </Typography>
    </Stack>
  );
}

export default function Contact() {
  return (
    <Box
      sx={{
        bgcolor: '#16181D',
        minHeight: '70vh',
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 12 },
        mb: { xs: 3, md: 4 }
      }}
      id="contact"
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '70%' } }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'var(--font-display)', fontSize: { xs: '2rem', md: '2.75rem' }, color: '#FAFAF9', mb: 2 }}
        >
          Let's build something great together.
        </Typography>

        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 6, lineHeight: 1.7 }}>
          Open to new opportunities as a Frontend / React.js Developer.
          Reach out by email, phone, or LinkedIn — I usually reply within a day.
        </Typography>

        <Box>
          {contactItems.map((item) => (
            <ContactRow key={item.label} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}