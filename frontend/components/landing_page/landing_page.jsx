import React from 'react';
// import stackoverpic from './stackoverpic.svg';

class Landing extends React.Component {
    constructor(props) {
        super(props);
    
       
      
    }
   
    render() {
        const love = '<'
        return (
            // <div styles={{ backgroundImage: `url(${stackoverpic})` }} className="main-landing"> 
            <div>
            <div className="main-landing">
                <img className="stackback" src={window.picture}/>
                <div className="text-container">
                    <div className="h1-div">
                        <h1 className="landing-h1">We {love}3 people who code!</h1>
                        <div className="landing-p">
                            We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.    
                        </div> 
                        <div className="button-landing">
                            <button className="git">Github</button>
                            <button className="indeed">Linkedin</button>
                        </div>
                    </div>
                </div>
            </div>
            
                <div className="second-landing">
                    <div className="land-container">
                        <div className="land-div-2">
                            <h2 className="">For developers, by a developer</h2>
                            <hr className="orange-line"/> 
                            <div className="landing-p">
                                Stack Overflow is an <span className="orange-text">open community</span> for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.
                        </div>
                            <div className="card-container">
                                <div className="card low-card">
                                    <img className="stack card-pic" src={window.cardleft} />
                                    <h4 className="card-title">Public Q&A</h4>
                                    <div className="card-text">
                                        Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.
                                    </div>
                                    <button className="button card-button">Browse questions</button>
                                </div>
                                <div className="card">
                                    <img className="stack card-pic" src={window.cardmiddle} />
                                    <h4 className="card-title">Private Q&A</h4>
                                    <div className="card-text">
                                        Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.
                                    </div>
                                    <button className="button card-button-middle">Try for free</button>
                                </div>
                                <div className="card low-card">
                                    <img className="stack card-pic" src={window.card} />
                                    <h4 className="card-title">Browse jobs</h4>
                                    <div className="card-text">
                                        Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.
                                    </div>
                                    <button className="button card-button">Find a job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
};

export default Landing;