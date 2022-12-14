import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../context/DataLayer'

const Header = () => {
    const [{ user }] = useDataLayerValue()

    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input type="text" placeholder='Search for Artists, Songs, or Albums' />
            </div>

            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt='A.s' />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header