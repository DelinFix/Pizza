import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SortItem } from "src/types/filter"

export interface IFilterSliceState {
  searchValue: string
  categoryId: number
  sort: SortItem
}

const initialState: IFilterSliceState = {
  searchValue: "",
  categoryId: 0,
  sort: { name: "популярности", sort: "rating" },
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSortType: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload
    },
    setFilters: (state, action: PayloadAction<IFilterSliceState>) => {
      state.sort = action.payload.sort
      state.categoryId = Number(action.payload.categoryId)
    },
  },
})

export const { setCategoryId, setSortType, setFilters, setSearchValue } =
  filterSlice.actions

export default filterSlice.reducer
