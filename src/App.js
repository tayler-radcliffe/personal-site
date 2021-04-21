import React from 'react';
import AboutMe from './AboutMe';
import './App.css';
import Footer from './Footer';
import Projects from './Projects';
import Languages from './Languages';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



const handleClick = (event) => {
  const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};


function App(props) {

  return (
    <div className='content-container'>
      <div>
        <div className='home-container' id="back-to-top-anchor">
          <div style={{
            display: 'flex',
            position: 'relative',
            fontSize: '40px',
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
            color: 'white'
          }}><h1>TAYLER RADCLIFFE</h1>
            <h5 style={{ display: 'flex', position: 'absolute', marginTop: '250px' }}>Software Developer</h5>
          </div>

          <div class="container" style={{
            position: 'absolute',
            fontSize: '60px',
            marginTop: '600px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div to="about" class="arrow">
            </div>
          </div>
        </div>

        <AboutMe id="about" />
        <div class="wrapper">
          <div class="divider div-transparent div-arrow-down"></div>
        </div>
        <Languages id="languages" />
        <div class="wrapper">
          <div class="divider div-transparent div-arrow-down"></div>
        </div>
        <Projects id="portfolio" />
        <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Footer />
      </div>
    </div>
  )
}


export default App;
