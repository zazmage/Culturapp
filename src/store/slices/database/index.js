import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

export const databaseSlice = createSlice({
  name: "database",
  initialState: {
    data: null,
  },
  reducers: {
    setDatabase: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDatabase } = databaseSlice.actions;

export default databaseSlice.reducer;

export const getData = () => (dispatch) => {
  getDocs(collection(db, "eventos"))
    .then((res) => {
      const database = res.docs.map((el) => {
        const element = el.data();
        delete element.crawlTimestamp;
        return element;
      });
      dispatch(setDatabase(database));
    })
    .catch((error) => console.log(error));
};
