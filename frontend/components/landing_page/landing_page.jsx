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
                <img src={window.picture}/>
                <h1 className="landing-h1">We {love}3 App Academy students</h1>

                <span>
                        <i className="fab fa-stack-overflow"></i>
                    <p className="landing-p">
                         We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.    
                    </p> 
                    <button>Github</button>
                    <button>Indeed</button>
                </span>
            </div>
            
            <div className="white-landing">
                <div className="white-landing-1">

                </div>
                <div className="white-landing-2">

                </div>
                <div className="white-landing-3">

                </div>
            </div>
        </div>
        );
    }
};

export default Landing;