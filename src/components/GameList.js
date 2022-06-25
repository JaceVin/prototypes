import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import dynamic_logo from '../resources/dynamic-logo.jpeg'

function GameList({props, games}) {

    const params = useParams()
    const navigate = useNavigate()

    const gameList = games.map((game, i) => {
        if (game[params.filter.toLowerCase()]) return(
            <NavLink to={'/Game/' + game.name} key={i} className="game-info plain-text">
                {/* <img src={dynamic_logo} alt="" /> */}
                <h3>{game.name}</h3>
            <br></br>
            <br></br>
            </NavLink>
        )
        else return null
    })

    const ListTitle = (filter) => {
        switch (filter) {
            case 'Popular':
                return 'Populars'
            case 'Original':
                return 'Originals'
            case 'Favorite':
                return 'Favorites'
            case 'Subscribed':
                return 'Subscriptions'
            default: return false
        }
    }

    useEffect(() => {
        if (!ListTitle(params.filter)) navigate('home', { replace: true })
    });

    return(
        <div>
            <h2 className="title">{ListTitle(params.filter)}</h2>

            <div id="wrap-middle" className="curve">

                <div className="games">
                    {gameList}

                    <NavLink to={"/" + params.filter + "/UploadGame"} className="add-game">
                        +
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        games: state.games,

        props: props
    }
}

export default connect(mapStateToProps) (GameList)