import { configureStore } from '@reduxjs/toolkit';

import loremSlice from "./reducers/loremSlice";
import IpSlice from './reducers/IpSlice';
import MemorySlice from './reducers/MemorySlice';
import HostInfoSlice from "./reducers/HostInfoSlice";
import PsSlice from "./reducers/PsSlice";
const store = configureStore({
  reducer: {
    // lorem: loremSlice.reducer,
    // ip: IpSlice.reducer,
    // memory: MemorySlice.reducer,
    info: HostInfoSlice.reducer,
    ps :PsSlice.reducer,
  },
  
});

export default store;