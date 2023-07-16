import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api", //state.api
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => "/blogs",
        }),
    }),
});

export const { useGetBlogsQuery } = apiSlice;
