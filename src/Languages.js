import React from 'react';
import java from './images/java.png';
import html from './images/html.png';
import css from './images/css.png';
import jquery from './images/jquery.png';
import react from './images/react.png';
import './index.css';
import langicon from './images/languagelogo.png';
import postgresql from './images/postgresql-logo.png';

export default function Languages() {


    return (
        <div >
            <div>
                <h1 style={{ display: 'flex', position: 'relative', fontSize: '50px', alignItems: 'center', justifyContent: 'center', marginBottom: '70px'}}>
                    <img src={langicon} style={{ height: '50px', width: '60px', paddingRight: '20px'}} />LANGUAGES</h1>
            </div>

            <div className='languages-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <img src={react} className='image' style={{
                    height: '90px',
                    width: '280px',
                    padding: '20px'
                }} />
                <img src={html} className='image' style={{
                    height: '250px',
                    width: '180px',
                    padding: '20px'
                }} />
                <img src={css} className='image'
                    style={{
                        height: '230px',
                        width: '180px',
                        padding: '20px'
                    }} />
                <img src={java} className='image' style={{
                    height: '230px',
                    width: '180px',
                    padding: '20px'
                }} />
                <img src={postgresql} className='image' style={{
                    height: '250px',
                    width: '210px',
                    padding: '20px'
                }} />
                <img src={jquery} className='image' style={{
                    height: '80px',
                    width: '350px',
                    padding: '20px'
                }} />
                

            </div>
        </div>
    )
}