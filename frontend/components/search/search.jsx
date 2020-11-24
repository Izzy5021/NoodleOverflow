import React from 'react'
// import VideoIndexItem from '../VideosIndex/videoIndexItem'

class SearchPage extends React.Component{
     constructor(props) {
        super(props);
         this.state = {
            question_id : '',
            author_id: Number(props.author_id)
        };
        this.askQuestion = this.askQuestion.bind(this);
        this.openQuestion = this.openQuestion.bind(this);
     
    }

    componentDidMount() { this.props.fetchQuestions()}
    
    askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    openQuestion(id) {
    
        this.props.history.push(`/showQuestion/${id}`);
    }

    render() {
          
       
        let search = this.props.location.pathname.slice(8)
        console.log(search)
        // debugger
        
        let questions = this.props.questions.arr ? this.props.questions.arr : [];
        console.log("questions from render", questions)
        if( questions.length !==0 ){
            console.log("get in there...:", questions[1].title)
            // if( searchQuestions.length !==0 && search.length !== 0 && questions.length !==0 ){
                // console.log("get in there...:", questions[1].title)
                
            let searchQuestions = questions.filter(question =>(
                question.title.toLowerCase().includes(search.toLowerCase())
            ));

            console.log("searchQuestions:", searchQuestions)
        
            return (
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Top Questions</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    <strong className='SearchTitle'>Your Search: {search}</strong>
                    <div >
                            {
                                searchQuestions.map(question => (
                                    // <VideoIndexItem key={video.id} video={video} history={history} addToList={addToList} deleteFromList={deleteFromList} mylist={mylist} />
                                    <div>
                                        {question.title} 
                                    </div>
                                )) }
                            
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
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Top Questions</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    <div>Questions Loading ......</div>
                </div>
                
            )
        }
    }
}

export default SearchPage;