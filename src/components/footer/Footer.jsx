import './Footer.css'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { Grid, Slider } from '@mui/material'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className='footer-albumlogo'
          src='https://upload.wikimedia.org/wikipedia/en/6/6e/Pink_Floyd_-_Division_Bell.jpg'
          alt=''
        ></img>
        <div className="footer-songinfo">
          <h4>Nobody Home</h4>
          <p>Pink Floyd</p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className='footer-green' />
        <SkipPreviousIcon className='footer-icon' />
        <PlayCircleFilledRoundedIcon fontSize='large' className='footer-icon' />
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
            <Slider sx={{ width: "120px" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
