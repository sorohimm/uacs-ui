import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {List, ListItem} from "@mui/material";
import {createTheme} from "@mui/material/styles";


const theme = createTheme({
    typography: {
        fontFamily: 'Menlo',
        color: 'white',
        poster: {
            color: 'red',
        },
        // Disable h3 variant
        h3: undefined,
    },
});

function Copyright() {
    return (
        <Typography style={theme.typography} variant="body2">
            {'Copyright © '}
            <Link color="inherit" href="https://uacs.ru/">
                Universal Archery Control System
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const flexContainer = {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline/>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: '#002a38',
                }}
            >
                <Container maxWidth="sm">
                    <List style={theme.typography}>
                        <ListItem
                            primaryText="foo1"
                            secondaryText="bar1"/>
                        <ListItem
                            primaryText="foo2"
                            secondaryText="bar2"/>
                    </List>
                    <Copyright/>
                </Container>
            </Box>
        </Box>
    );
}

