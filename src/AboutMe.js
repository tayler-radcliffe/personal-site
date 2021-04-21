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
            marginLeft: '-310px',
            marginTop: '80px',
            height: 180,
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
                    <TabPanel value={value} index={0} style={{marginTop: '-50px'}}>
                        <p>My name is Tayler Radcliffe and I'm a <br></br> software developer
                     located in Jacksonville, Florida.<br></br>
                     I recently finished a Full-stack Developer<br></br> certificate
                    with Fullstack Academy and am<br></br> continually growing my knowledge with online courses. </p>
                   <p> I possess many skills including leadership,<br></br> project management, 
                    problem-solving and more. <br></br> I strive to excel in every capacity 
                    and believe <br></br>maximum efficiency, with utmost attention to <br></br> detail, is vital to success. </p>
            </TabPanel>
                <TabPanel value={value} index={1} style={{marginLeft: '50px', textAlign: 'center'}}>
                    <p><a href="mailto:tradcliffe@live.com">tradcliffe@live.com</a></p>
                    <p>(904) 392-0205</p>
                </TabPanel>
                <TabPanel value={value} index={2} style={{marginLeft: '90px', textAlign: 'center'}}>
                    <p><a href="https://github.com/tayler-radcliffe" target="_blank" rel="noreferrer">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/tayler-radcliffe/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                </TabPanel>

                </div>
            </ThemeProvider >
        );
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '320px' }}>
            <h1 style={{ display: 'flex', position: 'absolute', fontSize: '50px', alignItems: 'center', justifyContent: 'center', marginTop: '-60px' }}>
                <img src={aboutme} alt='about me icon' style={{
                    height: '80px',
                    width: '80px',
                    padding: '20px'
                }} />ABOUT ME</h1>
            <div><VerticalTabs /></div>
        </div>

    )
}