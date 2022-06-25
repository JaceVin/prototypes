import {NavLink} from 'react-router-dom'

function Navigator() {
    return (
        <div className="align">
            <NavLink to="/Popular/Games" className="plain-text">
                <h2 className="title">Populars</h2>
            </NavLink>
<br></br>
            <NavLink to="/Original/Games" className="plain-text">
                <h2 className="title">Originals</h2>
            </NavLink>
<br></br>
            <NavLink to="/Favorite/Games" className="plain-text">
                <h2 className="title">Favorites</h2>
            </NavLink>
<br></br>
            <NavLink to="/Subscribed/Games" className="plain-text">
                <h2 className="title">Subscriptions</h2>
            </NavLink>

        </div>
    )
}

export default (Navigator)