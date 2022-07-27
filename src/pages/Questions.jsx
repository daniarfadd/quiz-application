import { Box } from "@mui/system"
import { Typography, Button } from "@mui/material"
import useAxios from "../hooks/useAxios"
import { useSelector } from "react-redux";

function Questions() {

  // question_category: "", 
  // question_difficulty: "", 
  // question_type: "",
  // amount_of_question: 10,

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

  // console.log(apiUrl)


  const { response, error, loading } = useAxios({ url: apiUrl })

  // console.log(response)

  return (
    <Box>
      <Typography variant="h4" >Question 1</Typography>
      <Typography mt={5} >This is the question :D</Typography>

      <Box mt={2}>
        <Button variant="outlined" >Answer 1</Button>
      </Box>

      <Box mt={2}>
        <Button variant="outlined" >Answer 2</Button>
      </Box>

      <Box mt={5}>
        Score: 2 / 6
      </Box>

    </Box>
  )
}

export default Questions