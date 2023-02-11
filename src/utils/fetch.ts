import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// types
import { IPizza } from "types"

export interface FetchPizzasParams {
    sortBy: string
    order: string
    category: string
}

export const fetchPizzas = createAsyncThunk<IPizza[], FetchPizzasParams>(
    "pizza/fetchPizzas",
    async (params) => {
        const { sortBy, order, category } = params
        const { data } = await axios.get<IPizza[]>(
            `https://62911a9d665ea71fe1410ad2.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
        return data
    }
)
