import stocks, {StockModel} from "@/data/stocks";

interface StateModel {
    stocks: Array<StockModel>
}

const state = {
    stocks: new Array<StockModel>()
};

const mutations = {
    'SET_STOCKS' (state: StateModel, stocks: Array<StockModel>) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state: StateModel, stocks: Array<StockModel>) {

    }
};

const actions = {
    buyStock: ({ commit }: any, order: any) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }: any) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }: any) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: (state: StateModel): Array<StockModel> => {
        return state.stocks
    }
};

export default {
    state, mutations, actions, getters
}