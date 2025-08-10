import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Pass file name as an argument: fetchProducts("plants.json")
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (fileName) => {
    // Agar tum public folder me JSON rakhte ho
    const res = await fetch(`/${fileName}`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return await res.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
