export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:  'BQD3PjHVVTQMVYZi8V1lCxDuEPPYPlUffq2fH0mcPx9axPwkq6fbzoXumur4h2F4wMENNRxbly4BQZKWZwiXxqHg5Avz9EWiDWLDkz_5n0yDRgrgef4P-xGF1qylEjOj2iTq62piW5agxRLiyxHfNilPcOJxMjaExD22P6oRORWedEW-_Fa2fUmsWqNbAVZ9K9KXLkW_YpKZBII2bzMG',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.user,
      }
    }
    case 'SET_TOKEN': {
      return {
        ...state,
        token: action.token,
      }
    }

    case 'SET_PLAYLISTS': {
      return {
        ...state,
        playlists: action.playlists,
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
