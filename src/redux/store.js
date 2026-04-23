import {configureStore} from '@reduxjs/toolkit'

import videosSlice from './videosSlice'

const store=configureStore({
    reducer:{videosSlice}
})

export default store