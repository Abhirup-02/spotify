import './Body.css'
import Header from '../header/Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavouriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDataLayerValue } from '../../context/DataLayer'
import SongRow from '../songRow/SongRow'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  // console.log(discover_weekly)

  // const playPlaylist = (id) => {
  //   spotify.play({
  //     context_uri: `spotify:playlist:35dfFAUNcOKvRubj4J7v8V`
  //   })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item
  //         })
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true
  //         })
  //       })
  //     })
  // }

  

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt=''></img>
        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon
            className='body_shuffle'
            // onClick={playPlaylist}
          />
          <FavouriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {/* LIST OF SONGS */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow
            spotify={spotify}
            key={item.added_at}
            track={item.track}
          />
        ))}
      </div>
    </div>
  )
}

export default Body
