import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const CountrySlice = createApi({
    reducerPath: "countryapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["demo"],
    endpoints: (builder) => {
        return {
            getWorldWideData: builder.query({
                query: () => {
                    return {
                        url: "https://disease.sh/v3/covid-19/all",
                        method: "GET"
                    }
                },
                providesTags: ["demo"]
            }),
            getCountryData: builder.query({
                query: () => {
                    return {
                        url: " https://disease.sh/v3/covid-19/countries",
                        method: "GET"
                    }
                },
                providesTags: ["demo"]
            }),
            getGraphData: builder.query({
                query: () => {
                    return {
                        url: "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
                        method: "GET"
                    }
                },
                providesTags: ["demo"]
            }),
        }
    }
})

export const { useGetWorldWideDataQuery, useGetCountryDataQuery, useGetGraphDataQuery } = CountrySlice
