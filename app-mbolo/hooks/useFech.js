import {useState, useEffect} from 'react'
import axios from 'axios';

export default function useFech() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () =>{
        setIsLoading(true);

        try {
            const response = await axios.get(
              "http://192.168.100.235:3000/products"
            );
            setData(response.data)
            isLoading(false)
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false)
        } 
    }


    useEffect(() => {
        fetchData()
    }, []);

    const refetch =() =>{
        setIsLoading(true)
    }

  return {data, isLoading, error, refetch}
}


