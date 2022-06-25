import { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import dynamic_logo from '../resources/dynamic-logo.jpeg'

function NavigationBar({account}) {

    useEffect(() => {
        const accountLink = document.getElementById('account-link')
        let text = document.createElement("h1")
        if (account.nickname === '') {
            accountLink.innerHTML = ''
            text.innerHTML = "Log in"
            accountLink.appendChild(text)

        } else {
            accountLink.innerHTML = ''
            text.innerHTML = account.nickname
            accountLink.appendChild(text)

            let image = document.createElement("img")
            image.src = `${dynamic_logo}`
            image.alt = ""
            accountLink.appendChild(image)
        }
    });

    return(
        <div>
            <NavLink exact to="/home" className="plain-text">
                <h1 id="app-name">Fun Zone</h1>
            </NavLink>
            {/* <input type="button" className="extra-btn"/> */}

            <NavLink to="/Account" id="account-link" className="plain-text"></NavLink>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}

export default connect(mapStateToProps) (NavigationBar)