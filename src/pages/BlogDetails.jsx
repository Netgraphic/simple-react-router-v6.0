import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => { 
    const params = useParams();
    const {id} = params;

    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if(loading) {
        return <p>Loading data...</p>
    }
    if(error) {
        return <p>Error...</p>
    }

    return (
        <>
            <h1>{data.id} - {data.title}</h1>
            <p>{data.body}</p>
            <Link to="/blog" className="btn btn-dark">Volver</Link>
        </>
    );
}

export default BlogDetails;