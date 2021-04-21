import React from 'react';
import './Projects.css';
import portfolio from './images/portfolioicon.png';
import fitnesspic from './images/fitnesstracker.png';
import linkeratorpic from './images/linkeratorpic.png';

export default function Projects() {
    return (
        <div>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px', flexDirection: 'row', alignContent: 'center'}}>
            <h1 style={{fontSize: '50px'}}><img src={portfolio} alt='portfolio icon' style={{ height: '60px', width: '60px', paddingRight: '20px'}} />PORTFOLIO</h1>
        </div>
			<div >
			<div class="grid">
					<figure class="effect-sarah">
						<img src={linkeratorpic} alt="linkerator" />
						<figcaption>
							<h2>Placeholder <span>Project</span></h2>
							<p>An API project
                                where you can browse products, create an account, add items to your cart, view your profile, leave a review on a product, and much more.</p>
							<p><a href="https://the-great-linkerator.herokuapp.com/" target="_blank" rel="noreferrer" style={{color: 'white'}}>Deployed Site</a></p>
						
						</figcaption>			
					</figure>
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

				<div class="grid">
					<figure class="effect-sarah">
						<img src={linkeratorpic} alt="linkerator" />
						<figcaption>
							<h2>The Great <span>Linkerator</span></h2>
							<p>An API project
                                where you can save links and keep track of how often you visit them.</p>
							<p><a href="https://the-great-linkerator.herokuapp.com/" target="_blank" rel="noreferrer" style={{color: 'white'}}>Deployed Site</a></p>
						
						</figcaption>			
					</figure>

				</div>
			</div>
        </div>
    )
}