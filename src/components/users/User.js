import {useEffect, useState} from 'react'

export default function User() {
    let [user, setUser] = useState([])
    let [id, setId] = useState()
    let show = (e) => {
        e.preventDefault()
        console.log(e.target.showUser.value);
        setId(id = e.target.showUser.value)
        console.log(user);
    }

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users/' + id).then(value => value.json()).then(value => {
            setUser(value)
        })
    }, [id])

    return (
        <div>
            <form onSubmit={show}>
                <input name={'showUser'} type={'number'} max={100} placeholder={'Choose user by id'}/>
            </form>
            <div>
                {user.id} {user.name} {user.username} {user.email} {user.phone}
            </div>

        </div>
    )
}