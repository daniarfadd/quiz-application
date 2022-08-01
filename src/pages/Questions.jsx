import { Box } from "@mui/system"
import { Typography, Button, CircularProgress } from "@mui/material"
import useAxios from "../hooks/useAxios"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { score_reducer } from "../redux/features/reducer";
import {decode} from 'html-entities';


  // random number to randomize the answers
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

function Questions() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const question = useSelector(state => state.question.value)

  


    let apiUrl = `/api.php?amount=${question.amount_of_question}`

    if(question.question_category){
      apiUrl = apiUrl.concat(`&category=${question.question_category}`)
    }
    if(question.question_difficulty){
      apiUrl = apiUrl.concat(`&difficulty=${question.question_difficulty}`)
    }
    if(question.question_type){
      apiUrl = apiUrl.concat(`&type=${question.question_type}`)
    }


  const { response, error, loading } = useAxios({ url: apiUrl })

  // console.log(response)

  // console.log(apiUrl)


  const [questionIndex, setQuestionIndex] = useState(0)
  const [options, setOptions] = useState([])
  
  useEffect(() => {

    if(response?.results.length){
      const data = response.results[questionIndex]
      let answers = [...data.incorrect_answers];
      answers.splice(getRandomInt(data.incorrect_answers.length),
      0,
      data.correct_answer
      );
      setOptions(answers)
    }

  }, [response, questionIndex])


   // to handle the answers and score
   function answerHandler(e){

    const questions = response.results[questionIndex]
    if(e.target.textContent === questions.correct_answer) {
      dispatch(score_reducer(question.score + 1))
      // console.log("you choose correct answer")
    }

    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1)
    } else {
      navigate('/finalpage')
    }
  }


  // function to return to the first page
  function returToHome(){
    navigate('/')
  }

  // Map the answers of the question
  const mappedAnswers = options.map( (answer, index) => (
    <Box mt={2} key={index}>
        <Button variant="outlined"  onClick={answerHandler} >{decode(answer)}</Button>
      </Box>
  ))


  if(loading) {
    return (
        <Box mt={20}>
            <CircularProgress color="secondary" />
        </Box>
    )
}

if(error) {
  return (
      <Typography variant="h4" mt={20} color="red">
          Something Went Wrong!
      </Typography>
  )
}

  return (
    <Box>
      <Typography variant="h4" >Question {questionIndex + 1}</Typography>
      {response.results.length !== 0 ? 
      <Typography mt={5} >{decode(response.results[questionIndex].question)}</Typography> 
      : 
      <Button variant="outlined" color="error" mt={40} onClick={returToHome}>
       If this message appears, please return to the first page and select a different difficulty/type option. Just click this button
      </Button>
      }
      
      {mappedAnswers}

      <Box mt={5}>
        Score: {question.score} / {response.results.length}
      </Box>

    </Box>
  )
}

export default Questions