import {useState, useEffect} from 'react'
import UsersInfa from "./UsersInfa";
export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => {
            setUsers(value)
        })
    },[])
    return (
        <div>
            {users.map(value => <UsersInfa item={value} key={value.id}/>)}
        </div>
    )
}