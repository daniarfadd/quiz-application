import axios from "axios"
import { useEffect, useState } from "react"

axios.defaults.baseURL ="https://opentdb.com/"


function useAxios(props) {

    const [response, setResponse] = useState(null)

    const [error, setError] = useState("")
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        function fetchData() {
            axios
                .get(props.url)
                .then(res => setResponse(res.data))
                .catch(err => setError(err))
                .finally(() => setLoading(false))
        }

        fetchData()

    }, [props.url])

    return {
        response, error, loading
    }
}

export default useAxios