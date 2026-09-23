'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

const projects = [
    {
        name: 'Health72 — Digital Health & Media Platform.',
        description:
            'Engineered and launched a comprehensive web platform dedicated to real-time health data monitoring, editorial health articles, and multimedia community interviews.',
        role: 'I was the lead developer for this project.The project involved designing and implementing a robust backend architecture, integrating real-time data visualization tools, and ensuring a seamless user experience across devices.',
        stack: ['React.js', 'Tailwind CSS', 'MySQL', 'PHP', 'Laravel'],
        live: 'https://health72.com/',

    },
    {
        name: '72 Dragons Cannes — Global Film Festival Microsite.',
        description:
            'Architected and maintained a high-traffic, media-centric international event micrositededicated to live coverage, daily video reporting, and editorial coverage for the Cannes Film Festival.',
        role: 'Led front-end technical direction and system architecture for high-performance web applications using React.js, ES6+,tailwind CSS and Laravel, ensuring optimal user experience and scalability.',
        stack: ['React.js', 'Tailwind CSS', 'MySQL', 'PHP', 'Laravel'],
        live: '· https://72dragons.media/cannes-microsite/',

    },
    {
        name: 'Face Recognition Attendance System (Company Internal Project',
        description:
            'Architected and maintained a high-traffic, media-centric international event micrositededicated to live coverage, daily video reporting, and editorial coverage for the Cannes Film Festival.',
        role: 'Developed a face recognition authentication system for employee login as part of an internal attendance platform. Built a CMS to register employees by capturing multiple facial images and generating facial descriptors for each user.',
        stack: ['Node.js', 'TensorFlow.js', 'JavaScript', 'Express.js', 'REST APIs'],
        live: 'No live link available',

    },
];

export default function Projects() {
    return (
        <Box id="projects" >
            <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, mb: 1 }}>
                Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mb: 6 }}>
                A couple of things I've built end to end.
            </Typography>

            <Stack spacing={6} >
                {projects.map((project) => (
                    <Box
                        key={project.name}
                        sx={{
                            borderTop: '1px solid #E5E5E0',
                            pt: 4,
                            width: '100%',
                        }}
                    >
                        <Typography variant="h4" sx={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', mb: 1 }}>
                            {project.name}
                        </Typography>

                        <Typography variant="body1" sx={{ maxWidth: 560, color: 'text.primary', mb: 1 }}>
                            {project.description}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 560, mb: 2 }}>
                            {project.role}
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                            {project.stack.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    sx={{
                                        fontFamily: 'var(--font-mono)',
                                        bgcolor: '#EEF0FF',
                                        color: '#4338CA',
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Stack>

                        <Stack direction="row" spacing={3}>
                            <Typography
                                component={Link}
                                href={project.live}
                                target="_blank"
                                variant="body2"
                                sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'underline' }}
                            >
                                {project.name === '' ? 'No live link available' : project.name}
                            </Typography>
                            {/* <Typography
                component={Link}
                href={project.github}
                target="_blank"
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}
              >
                GitHub
              </Typography> */}
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}