import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();
    const userStyle = {
        border: '5px solid yellow',
        padding: '2px',
        borderRadius: '20px',
        margin: '10px'
    };
    const dStyle = {
        margin: '10px',
        border: '5px solid yellow',
        padding: '2px',
    };
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={userStyle}>
            <h4>Post of Id: {id}</h4>
            <h3>Title: {title}</h3>
            <Link style={dStyle} to={`/post/${id}`}>Post Details</Link>
            <Link style={dStyle} to={`/posts/${id}`}>Show Details Details</Link>
            <button onClick={handleShowDetails} style={dStyle}>Click to see details</button>
        </div >
    );
};

export default Post;