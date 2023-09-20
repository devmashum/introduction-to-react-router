import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const { name, website } = user;
    return (
        <div>
            <h2>User Name: {name}</h2>
            <h2>Web: {website}</h2>
        </div>
    );
};

export default UserDetails;