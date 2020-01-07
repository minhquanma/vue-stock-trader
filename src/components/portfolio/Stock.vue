<template>
  <div class="col-md-4 my-container">
    <div class="card border-success">
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
              :class="{ danger: insufficientQuantity}"
            />
          </div>
          <div class="float-right">
            <button
              class="btn btn-success"
              @click="sellStock"
              :disabled="insufficientQuantity ||  quantity <= 0"
            >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>
<script>
import { mapActions } from "vuex";
import { OrderModel } from "@/data/order";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

