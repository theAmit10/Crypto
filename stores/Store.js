const {configureStore} = require('@reduxjs/toolkit');
import ThemeReducer from './ThemeSlice';
import holdingsReducer from './holdingsSlice';
import coinMarketReducer from './coinMarketSlice';
import walletDataReducer from './walletDataSlice';

const Store = configureStore({
  reducer: {
    theme: ThemeReducer,
    holdings: holdingsReducer,
    coinMarket: coinMarketReducer,
    walletData: walletDataReducer,
  },
});

export default Store;
