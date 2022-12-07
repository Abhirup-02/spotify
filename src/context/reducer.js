export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  item: null,
  // token: "BQDS-lz-203b4W_u13tFLKdZH6Gmj55SMtPC62wtIEey4ODx8SzcFMj3BIY91EqoRXZxaLpW9KFSmKRf0D_CE6rldwYyQU_9w3czH6x_iabfTv57NcIzLuOnTLTglKk_FZcg4CvB7jOFcECf_cJgC-fMQCRli-jPisYFsQynq0AeVWcLOFMudvJKuRTJ22qVa-EO5qJcktUo9llyZ7U3oPgHHIpgujBjqg"
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state
  }
}
/*case "SET_PLAYING":
    return {
      ...state,
      playing: action.playing,
    };
 
  case "SET_ITEM":
    return {
      ...state,
      item: action.item,
    };
 
  
 
  case "SET_TOP_ARTISTS":
    return {
      ...state,
      top_artists: action.top_artists,
    };
 
  case "SET_TOKEN":
    return {
      ...state,
      token: action.token,
    };
 
  case "SET_SPOTIFY":
    return {
      ...state,
      spotify: action.spotify,
    };*/





export default reducer