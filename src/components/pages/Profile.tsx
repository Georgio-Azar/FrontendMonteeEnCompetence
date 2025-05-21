import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useEffect } from "react";

export default function Profile() {
    const userId = useSelector((state: RootState) => state.auth.userId);
    const accessToken = useSelector((state: RootState) => state.auth.accessToken);
    console.log("User ID from Redux store:", userId);
    console.log("Access Token from Redux store:", accessToken);

    let userData: any = null;
    // Fetch user data from the API using the access token
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/${userId}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                userData = await response.json();
                console.log("User data:", userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    })

    return (
    <div id="profile">
        <h1>Profile</h1>

    </div>
    );    
}