import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { amount_reducer, score_reducer } from "../redux/features/reducer"
import Confetti from 'react-confetti'




function FinalPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const score = useSelector(state => state.question.value.score)
  const amountQuestions = useSelector(state => state.question.value.amount_of_question)
  const finalScore = parseInt((100 / amountQuestions) * score);

  function returnHome() {
    dispatch(score_reducer(0))
    dispatch(amount_reducer(10))
    navigate('/')
  }

  return (
    <Box mt={10}>
      <Confetti />
      <Typography variant="h2" sx={{fontWeight:'400'}}>Your Final Score</Typography>
      <Typography variant="h2" sx={{fontWeight:'400'}} mt={15} mb={20}color="green">{finalScore}/100</Typography>
      <Button variant="contained" onClick={returnHome} size="large" sx={{ color: 'brokenwhite', backgroundColor: '#4D5B9E', borderColor: 'none' }}>Take another quiz</Button>
    </Box>
  )
}

export default FinalPage