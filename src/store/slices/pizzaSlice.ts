import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store"
import { IPizza } from "src/types/pizza"

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

export const pizzaSelector = (state: RootState) => state.pizza

export default pizzaSlice.reducer
