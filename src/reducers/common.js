import * as ActionTypes from '../commons/ActionTypes'

const initialState = {
  URL:'http://192.168.1.219:8002/public/index.php/api/',
}

if(!initialState.access_token){
  // initialState.access_token = AsyncStorage.getItem('access_token');
  initialState.access_token = 'a0b92ad7bf9361827729477de1f6c388';
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
