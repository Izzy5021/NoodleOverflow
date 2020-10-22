import React from 'react';

class ShowPage extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: null, 
            id: null 
        }  
       
        console.log("window.location:", window.location);
        if (props.questions.currentQuestion) {
            let {currentQuestion} = props.questions
            this.setState({currentQuestion: currentQuestion});
        } 
        // if (props.match.params.id){
        //     let id = Number(props.match.params.id);
        //     // ask Adrian 
        //     //let {id} = props.match.params
        //     this.setState({id: id});
        // }

        // this.openQuestion = this.openQuestion.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInput = this.handleInput.bind(this);
        console.log("CONSTRUCTOR this.state:",this.state);
        console.log("constructror this.props", this.props);
    }


    // componentWillUnmount() { this.props.clearSessionErrors() }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.match.params.id !== this.props.match.params.id){
            let id = Number(this.props.match.params.id);
            this.setState({id: id});
        }
        console.log("state.id from update", this.state.id);
        if(prevProps.questions.currentQuestion !== this.props.questions.currentQuestion){
            console.log("component did update")
            let {currentQuestion} = this.props.questions;
            this.setState({currentQuestion: currentQuestion});
        }
    }
    componentDidMount() {  this.props.showQuestion(this.props.match.params.id)}
    
  

    render() {
        let {currentQuestion} = this.state;
        console.log("currentQuestion,", currentQuestion)
        // console.log("this.props.entities", this.props.entities)
        if(currentQuestion){
            // console.log("currentQuestion", this.props)
        
        
            return (
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Question</h2>
                 
                              <div className="questions-show"  >
                                   <br/>
                                   <br/>
                                      
                                  {currentQuestion.title}
                                     <br/>
                                     <br/>
                                  {currentQuestion.body}

                                    <br/>
                                    <br/>      
                              </div>
                </div>
            );
        }else{
            return(
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Question</h2>
                    <div className="loading" >Question Loading ......</div>
                </div>
                
            );
          }
    }
}

export default ShowPage;