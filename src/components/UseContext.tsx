import {useContext, useState} from 'react';
import UserContext, { UserState } from '../context/store'

function Consumer() {
    const user = useContext<UserState>(UserContext);

    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

function UseContext() {
    const [user, setUser] = useState<UserState>({
        first: "Jane",
        last: "Doe",
    });

    return (
        <UserContext.Provider value={user}>
            <Consumer/>
            <button onClick={() => setUser({
                first: "Hieu",
                last: "Le",
            })}>
                Change Context
            </button>
        </UserContext.Provider>
    );
}

export default UseContext;