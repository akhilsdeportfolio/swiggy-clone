import loggerMiddleWare from './middleware/logger.js'
import monitorReducerEnhancer from './middleware/monitorReducer.js'
import {configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducer.js';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(loggerMiddleWare),
    preloadedState:{},    
    enhancers:(defaultEnhancer)=>[...defaultEnhancer(),monitorReducerEnhancer]    
});