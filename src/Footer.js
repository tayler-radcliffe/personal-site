import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import me from './images/meicon.png';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export default function Footer() {

    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Share Tech Mono', 'monospace'
          ].join(','),
      },});

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lavender',
            height: '250px',
            paddingBottom: '150px',
            fontFamily: "'Share Tech Mono', monospace",
            '& > *': {
                margin: theme.spacing(1)
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));

    const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
        <div>
            <div className={classes.root}>
                <Avatar alt="" src={me} className={classes.large} />
                <Button
                    variant='contained' color='secondary' style={{display: 'flex', position: 'absolute', marginTop: '150px'}}
                    onClick={(e) => {
                        const mailto = "mailto:tradcliffe@live.com";
                        window.location = mailto;
                        e.preventDefault();
                    }}>E-mail me</Button>
                <Button
                    variant='contained' color='secondary' style={{display: 'flex', position: 'absolute', marginTop: '250px'}}>Resume</Button></div>
        </div>
        </ThemeProvider>
    )
}
