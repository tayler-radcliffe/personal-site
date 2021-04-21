import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import aboutme from './images/aboutmeicon.png';
import './index.css'


export default function AboutMe() {


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const theme = createMuiTheme({
        typography: {
            fontFamily: [
                'Share Tech Mono', 'monospace'
            ].join(','),
        },
    });

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            position: 'absolute',
            marginLeft: '-160px',
            marginTop: '90px',
            height: 145,
            fontFamily: "'Share Tech Mono', monospace"
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
            fontFamily: "'Share Tech Mono', monospace"
        },
    }));

    function VerticalTabs() {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="About Me" {...a11yProps(0)} />
                        <Tab label="Contact Info" {...a11yProps(1)} />
                        <Tab label="Links" {...a11yProps(2)} />

                    </Tabs>
                    <TabPanel value={value} index={0}>
                        This is my about me!!!
            </TabPanel>
                    <TabPanel value={value} index={1}>
                       <p><a href="mailto:tradcliffe@live.com">tradcliffe@live.com</a></p>
                        <p>(904) 392-0205</p>
            </TabPanel>
                    <TabPanel value={value} index={2}>
                    <p><a href="https://github.com/tayler-radcliffe" target="_blank" rel="noreferrer">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/tayler-radcliffe/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </TabPanel>

                </div>
            </ThemeProvider>
        );
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '270px'}}>
            <h1 style={{ display: 'flex', position: 'absolute', fontSize: '50px', alignItems: 'center', justifyContent: 'center', marginTop: '-60px'}}>
                <img src={aboutme} alt='about me icon' style={{
                    height: '80px',
                    width: '80px',
                    padding: '20px'
                }} />ABOUT ME</h1>
            <div><VerticalTabs /></div>
        </div>

    )
}