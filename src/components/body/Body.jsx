import './Body.css'
import Header from '../header/Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavouriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDataLayerValue } from '../../context/DataLayer'
import SongRow from '../songRow/SongRow'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  console.log(discover_weekly)

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
          <PlayCircleFilledIcon className='body_shuffle' />
          <FavouriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {/* LIST OF SONGS */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
