<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"/>
        </button>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/stocks" class="nav-link">Stocks</router-link>
                </li>
            </ul>
            <ul class="navbar-nav mr-left">
                <li class="nav-item">
                    <a class="nav-link" href="#">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                    >
                        Save & Load
                    </a>
                </li>
            </ul>
            <strong class="navbar-text navbar-right">Funds {{ funds }}</strong>
        </div>
    </nav>
</template>
<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>