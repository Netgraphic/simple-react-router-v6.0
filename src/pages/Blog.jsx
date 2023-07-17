import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => { 

    const [searchParams, setSearchParams] = useSearchParams();

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

    if(loading) {
        return <p>Loading data...</p>
    }

    if(error) {
        return <p>Error...</p>
    }

    const handleChange = (e) => {
        let filter = e.target.value;
        
        if(filter) {
            setSearchParams({filter});
        }
        else {
            setSearchParams({});
        }
    }

    return (
        <>
            <h1>Blog</h1>
            <input
              type="text"
              className="form-control my-3"
              value={searchParams.get('filter') || ''}
              onChange={handleChange} 
            />

            <ul className="list-group">
            {
                data
                .filter((item) => {
                    let filter = searchParams.get('filter');

                    if(!filter) {
                        return true;
                    }

                    let name = item.title.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((item) => (
                    <li key={item.id} className="list-group-item">
                        <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
                    </li>
                ))
            }
            </ul>
        </>
    );
}

export default Blog;