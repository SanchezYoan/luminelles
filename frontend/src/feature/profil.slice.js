import { createSlice } from "@reduxjs/toolkit";

export const profilSlice = createSlice({
  name: "profil",
  initialState: {
    pseudo: "",
  },
  reducers: {
    setProfil: (state, { payload }) => {
      state.pseudo = payload;
    },
  },
});

export const { setProfil } = profilSlice.actions;
export default profilSlice.reducer;
