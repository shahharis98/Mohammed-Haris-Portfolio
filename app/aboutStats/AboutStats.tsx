import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useActionState } from 'react';

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '20+', label: 'Apps shipped' },
  { value: '20%', label: 'Faster load time' },
  { value: '120+', label: 'Employees served(sprint Management)' },
];


 export default function AboutStats() {
  return (
    <Stack direction='column' sx={{ gridColumn: '1 / -1' ,alignItems:'center', justifyContent:'center',}} >
      
      <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, mb: 1 ,fontFamily:'var(--font-display)'}}>
        What I Have Achieved
      </Typography>

      <Box sx={{ px: { xs: 1, md: 2 }, py: { xs: 2, md: 3 },width:'100%'}}>
        {/* Stats row */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: 2,
            mb: 10,
          }}
        >
          {stats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                bgcolor: '#EEF0FF',
                borderRadius: 1,
                p: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },

                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>


      </Box>
    </Stack>
  );
}