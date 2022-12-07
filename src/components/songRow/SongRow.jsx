import { useDataLayerValue } from '../../context/DataLayer'
import './songRow.css'

const SongRow = ({ spotify, track }) => {
    const [dispatch] = useDataLayerValue()
    // console.log(track)

    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`]
        })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item
                    })
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true
                    })
                })
            })
    }

    return (
        <div className="songrow" onClick={() => playSong(track.id)}>
            <img className='songrow-album' src={track.album.images[1].url} alt='' />
            <div className="songrow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow