import { Link } from "react-router-dom";


const User = ({ user }) => {

    const { name, email, phone, id } = user;
    const userStyle = {
        border: '5px solid yellow',
        padding: '2px',
        borderRadius: '20px',
        margin: '10px'
    };
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>


            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click me</button>
            </Link>
        </div>
    );
};

export default User;