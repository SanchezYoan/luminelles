import { createSlice } from "@reduxjs/toolkit";

export const profilSlice = createSlice({
  name: "profil",
  initialState: {
    pseudo: null,
  },
  reducers: {
    getProfil: (state, { payload }) => {
      state.pseudo = payload;
    },
  },
});

export const { getProfil } = profilSlice.actions;
export default profilSlice.reducer;
