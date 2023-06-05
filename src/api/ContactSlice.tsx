import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ContactType } from "../types/contact"

export const ContactSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["demo"],
    endpoints: (builder) => {
        return {
            getContacts: builder.query({
                query: () => {
                    return {
                        url: "/contacts",
                        method: "GET"
                    }
                },
                providesTags: ["demo"]
            }),
            addContacts: builder.mutation({
                query: (contactData: ContactType) => {
                    return {
                        url: "/contacts",
                        method: "POST",
                        body: contactData
                    }
                },
                invalidatesTags: ["demo"]
            }),
            deleteContacts: builder.mutation({
                query: (id) => {
                    return {
                        url: `/contacts/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["demo"]
            }),
            updateContacts: builder.mutation({
                query: contact => {
                    return {
                        url: `/contacts/${contact.id}`,
                        method: "PATCH",
                        body: contact
                    }
                },
                invalidatesTags: ["demo"]
            })
        }
    }
})

export const { useGetContactsQuery, useAddContactsMutation, useDeleteContactsMutation, useUpdateContactsMutation } = ContactSlice
