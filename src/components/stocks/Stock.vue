<template>
    <div class="col-md-4 my-container">
        <div class="card">
            <div class="card-header">
                <h4>
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
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
                                @click="buyStock"
                                :disabled="quantity <= 0"
                        >Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

    import {OrderModel} from "@/data/order";

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            buyStock(): void {
                const order: OrderModel = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };

                this.$store.dispatch('buyStock', order);

                this.quantity = 0;
            }
        }
    }
</script>
<style>

</style>