import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText = createAsyncThunk(
  "text/fetchText",
  async ({ paragraphCount, type }) => {
    console.log(`fetching text with ${paragraphCount} paragraphs and ${type}`);
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paragraphCount}&format=${type}`
    );
    return res.data;
  }
);

export const textSlice = createSlice({
  name: "text",
  initialState: {
    item: "Lorem ipsum dolor sit amet",
    type: "text",
    paragraph: 4,
    status: "idle",
    error: null,
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setParagraph: (state, action) => {
      state.paragraph = action.payload;
    },
  },
  extraReducers: {
    [fetchText.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.status = "succeeded";
    },
    [fetchText.pending]: (state) => {
      state.status = "loading";
    },
    [fetchText.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const getParagraphCount = (state) => state.text.paragraph;
export const getType = (state) => state.text.type;
export const { setType, setParagraph } = textSlice.actions;
export default textSlice.reducer;
