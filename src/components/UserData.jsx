import {useEffect, useState} from 'react';

export default function UserData() {
    const [userData, setUserData] = useState([]);
    const[userId, setUserId] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChangeUser = () => {
        if (userId > 9) {
            setUserId (userId - 9);
        }else{
            setUserId(userId+ 1);
        }
        console.log(userId);

    }

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error('Error' + response.status);
                }
                const data = await response.json();
                setUserData(data);
            }catch(err) {
                setError(err.message);
                setUserData(null)
            }finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [userId])
    return (
        <>
            {loading ? (
                <p>Loading...</p>) : error ? (
                    <p>{error}</p>
                ): userData ? (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Phone: {userData.phone}</p>
                </div>
                ): null}
            <button onClick={handleChangeUser}>Next user</button>
        </>
    )
}