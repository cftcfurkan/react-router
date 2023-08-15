import { useParams, Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';

export default function User() {
    const { isLoading, setIsLoding } = useState(true);
    const [user, setUser] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setIsLoding(false))
    }, [id])

    return (
        <div>
            <h1>User Details</h1>
            {isLoading && <div>Loading...</div>}
            {!isLoading && 
                    <code>
                        {JSON.stringify(user)}
                    </code>
}

            <br/>
            <br/>
            <br/>
            <Link to={`/user/${parseInt(id) - 1}`}>Prev. User ({parseInt(id) - 1})</Link>
            <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
        </div>
    )
} 