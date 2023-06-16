import React,{useState,useEffect} from "react";

function Triveeea(){
    const [noOfQuestions, setnoOfQuestions] = useState();
    const [timer, setTimer] = useState(45)
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);


    useEffect(()=>{
        
    },[])
    useEffect(() => {
        // Timer logic
        const interval = setInterval(() => {
        if (timer > 0) {
            setTimer((prevTimer) => prevTimer - 1);
        } else {
            // Timer ended, move to next question
            handleNextQuestion();   
        }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timer]);

    const handleNextQuestion = async()=>{
    // if(cutrre)
    }
    return (
        <>
            
        </>
    )
}
export default Triveeea;