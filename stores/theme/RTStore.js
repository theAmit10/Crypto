const { configureStore } = require("@reduxjs/toolkit");
import ThemeReducer from "./ThemeSlice";


const RTStore = configureStore({
    reducer: {
        theme: ThemeReducer
    }
})

export default RTStore