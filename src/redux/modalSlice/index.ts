import { createSlice } from "@reduxjs/toolkit";
interface InitialStateType {
  modalAuthVisibility: boolean;
  ordermodalVisibility: boolean;
}
const initialState: InitialStateType = {
  modalAuthVisibility: false,
  ordermodalVisibility: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthVisibility(state) {
      state.modalAuthVisibility = !state.modalAuthVisibility;
    },
    setOrderModalVisibility(state){
        state.ordermodalVisibility=!state.ordermodalVisibility
    }
  },
});
export const { setModalAuthVisibility,setOrderModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;
