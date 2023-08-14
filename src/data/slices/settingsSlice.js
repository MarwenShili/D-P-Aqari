import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpened: false,
  isFilterMenuOpened: false,
  direction: "ltr",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpened = !current(state).isSidebarOpened;
    },
    openSidebar: (state) => {
      state.isSidebarOpened = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpened = false;
    },
    setLang: (state, action) => {
      state.direction = action.payload;
    },
    toggleFilter: (state) => {
      state.isFilterMenuOpened = !current(state).isFilterMenuOpened;
    },
    openFilter: (state) => {
      state.isFilterMenuOpened = true;
    },
    closeFilter: (state) => {
      state.isFilterMenuOpened = false;
    },
  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  setLang,
  toggleFilter,
  openFilter,
  closeFilter,
} = settingsSlice.actions;

export default settingsSlice.reducer;
