const {configureStore} = require('@reduxjs/toolkit');
import ThemeReducer from './ThemeSlice';
import holdingsReducer from './holdingsSlice';
import coinMarketReducer from './coinMarketSlice';

const Store = configureStore({
  reducer: {
    theme: ThemeReducer,
    holdings: holdingsReducer,
    coinMarket: coinMarketReducer,
  },
});

export default Store;
