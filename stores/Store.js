const {configureStore} = require('@reduxjs/toolkit');
import ThemeReducer from './ThemeSlice';
import holdingsReducer from './holdingsSlice';
import coinMarketReducer from './coinMarketSlice';
import walletDataReducer from './walletDataSlice';
import topLooserReducer from './topLooserSlice';

const Store = configureStore({
  reducer: {
    theme: ThemeReducer,
    holdings: holdingsReducer,
    coinMarket: coinMarketReducer,
    walletData: walletDataReducer,
    topLooserMarket:topLooserReducer,
  },
});

export default Store;
