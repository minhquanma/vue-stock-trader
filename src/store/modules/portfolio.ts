import {OrderModel} from "@/data/order";
import {StockModel} from "@/data/stocks";
import {Getter} from "vuex";

interface StateModel {
    funds: number,
    stocks: any
}

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state: StateModel, {
        stockId, quantity, stockPrice
    }: OrderModel) {
        const record: any = state.stocks.find((element: any) => element.id === stockId);

        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity,
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state: StateModel, {stockId, quantity, stockPrice}: OrderModel) {
        const record: any = state.stocks.find((stock: any) => stock.id === stockId);

        if (record && record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStock({commit}: any, order: OrderModel) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state: StateModel, getters: any) {
        return state.stocks.map((stock: any) => {
            const record: any = getters.stocks.find((element: any) => element.id === stock.id);

            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds (state: StateModel) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}