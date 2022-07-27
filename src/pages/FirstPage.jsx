import { Box, Typography, Button, CircularProgress } from "@mui/material"
import SelectField from "../components/SelectField"
import TextFieldCom from "../components/TextFieldCom"
import useAxios from "../hooks/useAxios"
import { useNavigate } from 'react-router-dom';

function FirstPage() {

    const navigate = useNavigate()
    const { response, error, loading } = useAxios({ url: "/api_category.php"})

    // console.log(response)
   
    // animation for loading
    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress color="secondary" />
            </Box>
        )
    }

     // error prompt message
     if(error) {
        return (
            <Typography variant="h4" mt={20} color="red">
                Something Went Wrong!
            </Typography>
        )
     }


     const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" }
     ]

     const typeOptions = [
        { id: "multiple", name: "Multiple Choices" },
        { id: "boolean", name: "True or False" }
     ]




    function submitHandler(e) {
        e.preventDefault()
        navigate('/questions')
    }


  return (
    <div>
        <Typography variant="h3" fontWeight="bold">Quiz Application</Typography>
        <form onSubmit={submitHandler}>
            <SelectField options={response.trivia_categories} label="Category"/>
            <SelectField options={difficultyOptions} label="Difficulty"/>
            <SelectField options= {typeOptions} label="Type"/>
            <TextFieldCom />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Lets Go
                </Button>
            </Box>
        </form>
    </div>
  )
}

export default FirstPage