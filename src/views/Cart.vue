<template>
<div class="cart">
    <div id="paypal-button-container"></div>
    <!--- MODAL PURCHASE ------->
    <!-- Modal -->
    <div class="modal fade" id="ShippingModal" tabindex="-1" role="dialog" aria-labelledby="ShippingModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Purchase</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div>
                            <form id="fs-frm" name="file-upload-form" accept-charset="utf-8" action="https://formspree.io/f/xzbkkday" method="post">
                                <div class="container-fluid table" style="whitespace: nowrap;">
                                    <div class="row d-none d-md-flex table-header">
                                        <div class="col-md-2 table-cell">Prod.</div>
                                        <div class="col-md table-cell"></div>
                                        <div class="col-md-2 col-xl-1 table-cell">Price</div>
                                        <div class="col-md-2 col-xl-1 table-cell">Quan.</div>
                                        <div class="col-md-2 table-cell">Total</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 px-0">
                                            <img src="@/assets/media/mug-change.jpg" class="img-fluid" alt="Mugs" />
                                        </div>
                                        <div class="col-md">
                                            <div class="row">
                                                <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Product
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    <p class="headline3">Mug</p>
                                                    <p>Material: Ceramic</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-xl-1">
                                            <div class="row">
                                                <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Price
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    {{ Mug_price }} $
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-xl-1">
                                            <div class="row">
                                                <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Quantity
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    {{ mugs}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="row">
                                                <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Total
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    {{ mugs * Mug_price }} $
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" style="whitespace: nowrap;">
                                        <div class="col-md-2 px-0">
                                            <img src="@/assets/media/TShirt1.jpg" class="img-fluid" alt="Shirts" />
                                        </div>
                                        <div class="col-md">
                                            <div class="row">
                                                <div style="whitespace: nowrap; !important" class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Product
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    <p class="headline3">Shirt</p>
                                                    <p>Material: Cotton</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-xl-1">
                                            <div class="row">
                                                <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Price
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    {{ Shirt_price }} $
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-xl-1">
                                            <div class="row">
                                                <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Quantity
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    {{ shirts }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="row">
                                                <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                                                    Total
                                                </div>
                                                <div class="col-6 col-md-12 table-cell">
                                                    {{ shirts * Shirt_price }} $
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="container-fluid table">
                                            <div class="row">
                                                <div class="col table-sidebar table-cell">
                                                    <div class="row">
                                                        <div class="col-6 col-md-8 col-xl-6 table-cell">Subotal (incl. tax)</div>
                                                        <div class="col-6 col-md-4 col-xl-6 table-cell">{{ Subtotal }} $</div>
                                                        <div class="col-6 col-md-8 col-xl-6 table-cell">Shipping</div>
                                                        <div class="col-6 col-md-4 col-xl-6 table-cell">{{ Shipping }} $</div>
                                                        <div class="col-6 col-md-8 col-xl-6 table-cell">TOTAL</div>
                                                        <div class="col-6 col-md-4 col-xl-6 table-cell">{{ Number(Subtotal) + Number(Shipping) }} $</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div ref="paypal"></div>
                </div>
            </div>
        </div>
    </div>
    <!--***************************************************-->
    <div class="container">
        <h1 class="headline-alert">Cart</h1>
        <div class="container-fluid table">
            <div class="row d-none d-md-flex table-header">
                <div class="col-md-2 table-cell">Product</div>
                <div class="col-md table-cell"></div>
                <div class="col-md-2 col-xl-1 table-cell">Price</div>
                <div class="col-md-2 col-xl-1 table-cell">Quantity</div>
                <div class="col-md-2 table-cell">Total</div>
            </div>
            <div class="row">
                <div class="col-md-2 px-0">
                    <img src="@/assets/media/mug-change.jpg" class="img-fluid" alt="mugs" />
                </div>
                <div class="col-md">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Product
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            <p class="headline3">Mug</p>
                            <p>Material: Ceramic</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-xl-1">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Price
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            {{ Mug_price }} $
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-xl-1">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Quantity
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            <button class="form-control" @click="subtotal(), add_subtract('plus_mug')">+</button>
                            <input class="form-control" type="text" v-model="mugs" />
                            <button class="form-control" @click="subtotal(), add_subtract('minus_mug')">-</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Total
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            {{ mugs * Mug_price }} $
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2 px-0">
                    <img src="@/assets/media/TShirt1.jpg" class="img-fluid" alt="Shirts" />
                </div>
                <div class="col-md">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Product
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            <p class="headline3">Shirt</p>
                            <p>Material: Cotton</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-xl-1">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Price
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            {{ Shirt_price }} $
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-xl-1">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Quantity
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            <button class="form-control" @click="subtotal(), add_subtract('plus_shirt')">+</button>
                            <input class="form-control" type="text" v-model="shirts" />
                            <button class="form-control" @click="subtotal(), add_subtract('minus_shirt')">-</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row">
                        <div class="col-6 d-flex d-md-none table-sidebar table-cell">
                            Total
                        </div>
                        <div class="col-6 col-md-12 table-cell">
                            {{ shirts * Shirt_price }} $
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-4 offset-lg-2">
                <div class="container-fluid table">
                    <div class="row">
                        <div class="col table-sidebar table-cell">
                            <div class="row">
                                <div class="col-6 col-md-8 col-xl-6 table-cell">Subotal</div>
                                <div class="col-6 col-md-4 col-xl-6 table-cell">{{ Subtotal }} $</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="cal_shipping_shirts()" class="btn btn-lg btn-block btn-warning" data-toggle="modal" data-target="#ShippingModal"><i class="fas fa-coins"></i> Purchase</button>
            </div>
            <div class="col-md-6 order-md-first">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Do you have a coupon?</h5>
                        <p>If you have a coupon code, you can use it here. Only one coupon at a time can be used.</p>
                        <div class="form-group">
                            <label>Coupon code</label>
                            <input class="form-control" type="text" placeholder="Please enter your coupon code ..." />
                        </div>
                        <button class="btn btn-highlight">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    store,
    mutations
} from "../store";
export default {
    mounted() {
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AU9feHAxB5sbkPfQgui7IId7M3nIMKOPu5Kbmd9od51Of7hXrg1yL7w3PtQu4ndrX2mJJPQJqN46iR3x";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },
    computed: {
        mugs() {
            return store.mugs;
        },
        shirts() {
            return store.shirts;
        },
    },
    data() {
        return {
            setMugCount: mutations.setMugCount,
            setShirtCount: mutations.setShirtCount,
            alert: false,
            Mug_total: 0,
            Mug_quantity: this.mugs,
            Shirt_quantity: this.shirts,
            Shirt_total: 0,
            Mug_price: 10,
            Shirt_price: 15,
            Subtotal: 0,
            Shipping: 0,
            total: 0,
            product: {
                price: 0.01,
                description: "color changing mug",
            },
        };
    },
    created() {
        this.subtotal();
    },
    methods: {
        setLoaded: function () {
            this.loaded = true;
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                description: this.product.description,
                                amount: {
                                    currency_code: "USD",
                                    value: this.product.price,
                                },
                            }, ],
                        });
                    },
                })
                .render(this.$refs.paypal);
        },
        subtotal: function () {
            let mugs = this.mugs * this.Mug_price;
            let shirts = this.shirts * this.Shirt_price;
            this.Subtotal = mugs + shirts;
        },
        add_subtract: function (direction) {
            if ((this.shirts < 10) & (direction == "plus_shirt")) {
                this.setShirtCount(this.shirts + 1);
            } else if ((this.shirts > 0) & (direction == "minus_shirt")) {
                this.setShirtCount(this.shirts - 1);
            } else if ((this.mugs > 0) & (direction == "minus_mug")) {
                this.setMugCount(this.mugs - 1);
            } else if ((this.mugs < 10) & (direction == "plus_mug")) {
                this.setMugCount(this.mugs + 1);
            }
        },
        cal_shipping_shirts: function () {
            let shirts = this.shirts;
            let total_shipping = 0;
            let subtotal = this.Subtotal;
            const shirt_tier_1 = 4.95;
            const shirt_tier_2 = 10.35;
            const shirt_tier_3 = 13.95;
            if (shirts == 0) {
                total_shipping = 0;
            } else if (shirts == 1) {
                total_shipping = shirt_tier_1;
            } else if (shirts <= 8) {
                total_shipping = shirt_tier_2;
            } else if (shirts <= 10) {
                total_shipping = shirt_tier_3;
            }
            this.Shipping = total_shipping;
            this.product.price = subtotal + total_shipping
        },
    },
    watch: {
        Mug_quantity: function () {
            this.subtotal();
        },
        Shirt_quantity: function () {
            this.subtotal();
        },
    },
    name: "Cart",
    components: {},
};
</script>
