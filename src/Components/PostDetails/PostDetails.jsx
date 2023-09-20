import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    const { id, title, body } = post;
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Post details about: </h3>
            <p>Title:{id} {title}</p>
            <small>{body}</small>
            <button onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default PostDetails;