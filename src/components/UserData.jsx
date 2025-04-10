import {useEffect, useState} from 'react';

export default function UserData() {
    const [userData, setUserData] = useState([]);
    const[userId, setUserId] = useState(1);

    const handleChangeUser = () => {
        setUserId(userId+ 1);

    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data =>
            {setUserData(data);
            })
    }, [])
    return (
        <>
            {userData ? (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Phone: {userData.phone}</p>
                </div>
            ): (
                <p>Loading...</p>
            )}
            <button onClick={handleChangeUser}>Next user</button>
        </>
    )
}