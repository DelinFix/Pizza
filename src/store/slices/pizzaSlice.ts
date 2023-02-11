import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// types
import { IPizza } from "types"

// utils
import { fetchPizzas } from "utils"

export interface IPizzarSliceState {
    items: IPizza[]
    status: "loading" | "success" | "error"
}

const initialState: IPizzarSliceState = {
    items: [],
    status: "loading",
}

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<IPizza[]>) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = "loading"
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = "success"
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = "error"
            state.items = []
        })
    },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
