import { Box, Container, Stack, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      component="footer"

      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 5, md: 6 },
        px: { xs: 3, md: 7 },
      }}
    >
      <Container
      maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 3,
          maxWidth:'100%',
          width:'100%'
        }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Mohammed Haris
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Software Engineer · Building for the web.
          </Typography>
        </Box>


        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href="https://github.com/shahharis98"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="www.linkedin.com/in/mohammed-haris-shah-0976161b6"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:mohammedharisx@gmail.com"
            size="small"
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', textAlign: { xs: 'left', sm: 'center' }, mt: { xs: 4, sm: 5 } }}
      >
        © {new Date().getFullYear()} Mohammed Haris. All rights reserved.
      </Typography>
    </Box>
  );
}