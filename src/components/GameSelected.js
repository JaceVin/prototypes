import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
// import dynamic_logo from '../resources/dynamic-logo.jpeg'
// import brawlhalla_goldforge from '../resources/Brawlhalla Goldforge.mkv'

function GameSelected({props, games}) {

    const params = useParams()
    const navigate = useNavigate()

    const game = games.find(game => game.name === params.game_name)

    // const image = <div>
    //     <img src={dynamic_logo} alt="" />
    // </div>
    // const images_row = [image, image, image]

    useEffect(() => {
        if (!game) navigate('home', { replace: true })
    });

    return(
        <div>
            <h2 className="title">{params.game_name}</h2>

            <div id="wrap-middle" className="curve">
                {/* <video controls id="game-trailer" className="curve">
                    <source src={brawlhalla_goldforge} type="video/mp4" />
                </video> */}

                {/* <div id="game-details">
                    {images_row}
                    
                    {images_row}

                    {images_row}

                    {images_row}
                </div> */}
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

export default connect(mapStateToProps) (GameSelected)