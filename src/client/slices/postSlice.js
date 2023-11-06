import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  readValue: 'hello bandos',
  editValue: 'test',
};

/*
posts: [],

*/

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    readTest: (state, action) => {
      console.log('read test reducer', state.readValue);
    },
    writeTest: (state, action) => {
      state.editValue = action.payload;
      console.log('write test reducer', state.editValue);
    },
  },
});

/*
{
  name: 'post,
  actions: {
    'readTest': [f>],
    'writeTest': [f>],
  },
  reducer
}

// writeTest(hello) => 'post/readTest' 
// {
  type: 'post/readTest',
  payload: 'hello'
}

payload = {userId: stuff, userName:otherstuff}


*/

// const AllPosts = useSelector(state => state.post.posts)
// const AllPosts = useSelectr(getAllPosts)

// const getAllPosts = state => state.post.posts;

/*
export const INSTRUMENTS = Object.freeze({
  GUITAR: 'GUITAR',
  DRUMS: 'DRUMS',
  BASS: 'BASS',
  VOCALS: 'VOCALS',
  VIOLIN: 'VIOLIN',
  CELLO: 'CELLO',
  VIOLA: 'VIOLA',
  PIANO: 'PIANO',
  TRUMPET: 'TRUMPET',
  FLUTE: 'FLUTE',
});
*/
const { actions, reducer } = postSlice;

const { readTest, writeTest } = actions;

export default reducer;
