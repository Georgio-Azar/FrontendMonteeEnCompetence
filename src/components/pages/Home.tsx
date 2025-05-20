import { useEffect, useState } from "react";
import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})

const getUsers = async () => {
    const response = await API.get("/users");
    return response.data;
}

export default function Home() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };
        fetchUsers();
    }, []);

    return (
        <div id="home">
            <h1>Welcome to the Home Page</h1>
            <p>What do you want to do ?</p><br />
            {users.length > 0 ? (
                <div>
                    {users.map((user, idx) => (
                        <div key={idx}>
                            {user.nom} {user.prenom} - {user.email}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    )
}