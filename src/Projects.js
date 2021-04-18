import React from 'react';
import './Projects.css';
import portfolio from './images/portfolioicon.png';
import fitnesspic from './images/fitnesstracker.png';

export default function Projects() {
    return (
        <div>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px', alignContent: 'center'}}>
            <h1 style={{fontSize: '50px'}}><img src={portfolio} style={{ height: '60px', width: '60px', paddingRight: '20px'}} />PORTFOLIO</h1>
        </div>
				<div class="grid">
					<figure class="effect-sarah">
						<img src={fitnesspic} alt="img13"/>
						<figcaption>
							<h2>Fitness <span>Tracker</span></h2>
							<p>An API project
                                where you can create and save fitness routines.</p>
						</figcaption>			
					</figure>
		
				</div>
        </div>
    )
}