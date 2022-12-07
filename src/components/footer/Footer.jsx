import './Footer.css'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { Grid, Slider } from '@mui/material'
import { useDataLayerValue } from '../../context/DataLayer'
import { useEffect } from 'react'

const Footer = ({ spotify }) => {
  const [{ item, playing }, dispatch] = useDataLayerValue()

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing
      })
      dispatch({
        type: "SET_ITEM",
        item: r.item
      })
    })
  }, [spotify])

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause()
      dispatch({
        type: "SET_PLAYING",
        playing: false
      })
    }
    else {
      spotify.play()
      dispatch({
        type: "SET_PLAYING",
        playing: true
      })
    }
  }

  // const skipNext = () => {
  //   spotify.skipToNext()
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item
  //     })
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true
  //     })
  //   })
  // }

  // const skipPrevious = () => {
  //   spotify.skipToPrevious()
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item
  //     })
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true
  //     })
  //   })
  // }

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className='footer-albumlogo'
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer-songinfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer-songinfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer_center">
        <ShuffleIcon className='footer-green' />
        <SkipPreviousIcon className='footer-icon' />
        {playing ? (
          <PauseCircleFilledRoundedIcon
            onClick={handlePlayPause}
            fontSize='large'
            className='footer-icon'
          />
        ) : (
          <PlayCircleFilledRoundedIcon
            onClick={handlePlayPause}
            fontSize='large'
            className='footer-icon'
          />
        )}
        <SkipNextIcon className='footer-icon' />
        <RepeatIcon className='footer-green' />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' sx={{ width: "120px" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
