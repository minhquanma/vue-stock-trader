<template>
    <div class="col-md-4 card-container">
        <div class="card">
            <div class="card-header">
                <h4>
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h4>
            </div>
            <div class="card-body">
                <div class="panel-body">
                    <div class="float-left">
                        <input
                                type="number"
                                class="form-control"
                                placeholder="Quantity"
                                v-model="quantity"
                        />
                    </div>
                    <div class="float-right">
                        <button
                                class="btn btn-success"
                                @click="sellStock"
                                :disabled="quantity <= 0"
                        >Sell</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions} from "vuex";
    import {OrderModel} from "@/data/order";

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions([
                'sellStock'
            ]),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.sellStock();
            }
        }
    }
</script>
<style>
    .card-container {
        padding: 15px 0;
    }
</style>