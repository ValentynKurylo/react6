import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import User from "../users/User";
import Users from "../users/Users";
export default function Main() {
    return (
        <div>
            <Router>
                <div><Link to={'/user'}>User by id</Link></div>
                <div><Link to={'/users'}>All users</Link></div>
            <Switch>
                <Route path={'/user'} component={User}/>
                <Route path={'/users'} component={Users}/>
            </Switch>
                  </Router>
        </div>
    )
}