import React,{useState} from 'react'
import axios from "../axios/axios"
function TriveeeaAdmin() {

    const [questions, setquestions] = useState();
    const [answers, setanswers] = useState("");

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const answersArray = answers.split(" ");
        if(answersArray.length != questions){
            alert(`detected only ${answersArray.length} answers instead of ${questions} answers`)
        }
        try{
            const response = await axios.post("/triveeea-routes/insert-no-of-questions",
            {
                "NoOfQues":questions,
                "answers":answersArray
            })
            alert("Questions saved sucesfully")
            console.log(response); 
        }catch(e){
            console.log(e)
            alert("Something went wrong")
        }
    }

    return (
        <>
            <div className="ta-main-container">
                <form action="">
                    <div>
                        <label htmlFor="">No of Questions</label>
                        <input 
                            type="text"
                            value={questions}
                            onChange={(e)=>setquestions(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Answers</label>
                        <input 
                            type="text"
                            value={answers}
                            onChange={(e)=>setanswers(e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit} >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TriveeeaAdmin