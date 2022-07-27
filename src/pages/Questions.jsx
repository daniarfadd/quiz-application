import { Box } from "@mui/system"
import { Typography, Button, CircularProgress } from "@mui/material"
import useAxios from "../hooks/useAxios"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


  // random number to randomize the answers
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

function Questions() {

  const question = useSelector(state => state.question.value)
  // console.log(question)


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

  console.log(response)

  // console.log(apiUrl)


  const [questionIndex, setQuestionIndex] = useState(0)
  const [options, setOptions] = useState([])
  
  console.log(options)

  useEffect(() => {

    if(response?.results.length){
      const question = response.results[questionIndex]
      let answers = [...question.incorrect_answers];
      answers.splice(getRandomInt(question.incorrect_answers.length),
      0,
      question.correct_answer
      );
      setOptions(answers)
    }

  }, [response])


  // Map the answers of the question
  const mappedAnswers = options.map( (answer, index) => (
    <Box mt={2}>
        <Button variant="outlined" key={index} >{answer}</Button>
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
      <Typography mt={5} >{response.results[questionIndex].question}</Typography>

      {mappedAnswers}

      <Box mt={5}>
        Score: 2 / 6
      </Box>

    </Box>
  )
}

export default Questions