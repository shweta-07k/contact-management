import { configureStore } from "@reduxjs/toolkit";
import { ContactSlice } from "./ContactSlice";
import { CountrySlice } from "./CountrySlice";


const reduxStore = configureStore({
    reducer: {
        [ContactSlice.reducerPath]: ContactSlice.reducer,
        [CountrySlice.reducerPath]: CountrySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([ContactSlice.middleware, CountrySlice.middleware]),
})

export type RootType = ReturnType<typeof reduxStore.getState>
export type DispatchType = typeof reduxStore.dispatch

export default reduxStore