import React,{useState,useEffect} from "react";
import axios from "../axios/axios"
import "../css/triveeaEvent.css"

function Triveeea(){

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(30);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    //question count fetching
    useEffect(()=>{
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/triveeea-routes/get-question-count');
                console.log(response)
                const data = response.data.questionCount;
                setQuestions(Array(data).fill(1));
            } 
            catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    },[])

    useEffect(() => {
        if (timeRemaining === 0) {
            handleNextQuestion();
        } 
        else if (currentQuestionIndex < questions.length && !showSubmitButton) {
            const timer = setTimeout(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        
            return () => clearTimeout(timer);
        }
    }, [timeRemaining]);


    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setTimeRemaining(30);
        } else {
            setShowSubmitButton(true);
        }
    };
    const handleAnswerSelection = (answer) => {
        setSelectedAnswers((prevAnswers) => [
            ...prevAnswers,
            { questionId: questions[currentQuestionIndex].id, answer },
        ]);
    };
    const handleSubmit = async () => {
        console.log(selectedAnswers)
    }
    return (
        <div className="tep-main-container">
            {Array(4).fill().map((_,option) => (
                <button
                    key={option}
                    onClick={() => handleAnswerSelection(option+1)}
                >
                    {option+1}
                </button>
            ))}
            <p>Time Remaining: {timeRemaining}s</p>

            {showSubmitButton ? 
                (<button onClick={handleSubmit}>Submit</button>)
                    : 
                (<button onClick={handleNextQuestion}>Next Question</button>)
            }
        </div>
    )
}
export default Triveeea;


function QuestionComp(props){

    const [timer, setTimer] = useState(5);


    useEffect(() => {
        // Timer logic
        const interval = setInterval(() => {
        if (timer > 0) {
            setTimer((prevTimer) => prevTimer - 1);
        } else {
            // Timer ended, move to next question
            // handleNextQuestion();   
        }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timer]);
    return (
        <>
            <div>
                <label htmlFor="">{props.no}</label>
            </div>
            <div>
                <label htmlFor="">1</label>
                <input type="radio" value={1} name="option" />
            </div>
            <div>
                <label htmlFor="">2</label>
                <input type="radio" value={2} name="option" />
            </div>
            <div>
                <label htmlFor="">3</label>
                <input type="radio" value={3}  name="option"/>
            </div>
            <div>
                <label htmlFor="">4</label>
                <input type="radio" value={4} name="option"/>
            </div>

            <div>
                <button>Next</button>
            </div>
        </>
    )
}



