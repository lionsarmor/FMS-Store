<template>
    <div>
        <div class="container">
            <!--*****************************************-->
            <!-- Modal -->
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Agreement</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            SITE AGREEMENT By utilizing this Site you agree to to comply with the following policies below. If you do not agree to these, please do not use this site. Privacy Policy | Cookie Policy | Terms of Service INVOICE
                            & PRODUCTION TIMELINE You will recieve a Payment Invoice within 24-48 hours after submitting your order. After Payment Invoice has been completed, your Product will be manufactured within 4-8 weeks. Once your
                            product has been completed you will receive a Shipment Notification with tracking information.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" data-toggle="modal" :data-target="nameModal" class="btn btn-primary">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CUSTOM Modal ****************************************************    -->
            <div class="modal fade" id="customModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Custom Item Form</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- FORM -->
                            <form id="fs-frm" name="file-upload-form" accept-charset="utf-8" action="https://formspree.io/f/xzbkkday" method="post">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Full Name</span>
                                    </div>
                                    <input name="Name" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Phone</span>
                                    </div>
                                    <input name="Phone" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input name="Email" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <label>Choose Item</label>
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Options &nbsp; </label>
                                        </div>
                                        <select v-model="Request_option" style="background-color: black;" class="custom-select form-control form-control2" id="inputGroupSelect01" name="items">
                                            <option v-for="option in options" :key="option.slug" :value="option.slug">{{ option.name }}</option>
                                        </select>
                                        {{ Request_option }}
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-default">QUANTITY</span>
                                        </div>
                                        <input type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="Quantity" required />
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Image Link</span>
                                    </div>
                                    <input name="Image Link" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <label for="exampleFormControlTextarea1">Item Details and Instructions</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Details and instructions"></textarea>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-success" @click="ShowDiv()"><i class="fas fa-scroll"></i> Request Quote</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SHIRTS Modal ****************************************************    -->
            <div class="modal fade" id="shirtsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Apprel Form</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- FORM -->
                            <form id="fs-frm" name="file-upload-form" accept-charset="utf-8" action="https://formspree.io/f/xzbkkday" method="post">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Full Name</span>
                                    </div>
                                    <input name="Name" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Phone</span>
                                    </div>
                                    <input name="Phone" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input name="Email" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <label>Choose Item</label>
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">SHIRTS &nbsp; </label>
                                        </div>
                                        <select v-model="Shirt_Request_option" style="background-color: black;" class="custom-select form-control form-control2" id="inputGroupSelect01" name="items">
                                            <option v-for="option in Shirts_options" :key="option.slug" :value="option.slug">{{ option.name }}</option>
                                        </select>
                                        {{ Request_option }}
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-default">QUANTITY</span>
                                        </div>
                                        <input type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="Quantity" required />
                                    </div>
                                </div>

                                <label for="exampleFormControlTextarea1">Item Details and Instructions</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Details and instructions"></textarea>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-success" @click="ShowDiv()"><i class="fas fa-scroll"></i> Request Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CUPS Modal ****************************************************    -->
            <div class="modal fade" id="cupsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Mugs Form</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- FORM -->
                            <form id="fs-frm" name="file-upload-form" accept-charset="utf-8" action="https://formspree.io/f/xzbkkday" method="post">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Full Name</span>
                                    </div>
                                    <input name="Name" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Phone</span>
                                    </div>
                                    <input name="Phone" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input name="Email" type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                                </div>
                                <label>Choose Item</label>
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">MUGS &nbsp; </label>
                                        </div>
                                        <select v-model="Cups_Request_option" style="background-color: black;" class="custom-select form-control form-control2" id="inputGroupSelect01" name="items">
                                            <option v-for="option in Cups_options" :key="option.slug" :value="option.slug">{{ option.name }}</option>
                                        </select>
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">STYLE &nbsp; </label>
                                        </div>
                                        <select v-model="Cups_Request_option" style="background-color: black;" class="custom-select form-control form-control2" id="inputGroupSelect01" name="style">
                                            <option v-for="option in Cups_style_options" :key="option.slug" :value="option.slug">{{ option.name }}</option>
                                        </select>
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-default">QUANTITY</span>
                                        </div>
                                        <input type="text" class="form-control form-control2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="Quantity" required />
                                    </div>
                                </div>
                                <label for="exampleFormControlTextarea1">Item Details and Instructions</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Details and instructions"></textarea>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-success" @click="ShowDiv()"><i class="fas fa-scroll"></i> Request Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--*************************************-->
            <div v-show="alert" class="alert alert-success" style="position: absolute; margin-top: -5vh;"><strong>Item Added To Cart!</strong> press the Shopping Cart to checkout.</div>
            <span style="white-space: nowrap;">
                <h1 class="headline-alert">SHOP</h1>
            </span>
            <hr />
            <!-- *************** ITEM BUTTONS *********************** -->

            <!-- *******************T-SHIRT POWER PUFF GIRLS*************************************** -->
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div class="col mb-3">
                        <!--mb-3: Fix for card height 100% issue with margin-->
                        <div class="card h-100 mb-0">
                            <!--mb-0: Fix for card height 100% issue with margin-->
                            <span class="corner-border-top"></span>
                            <img src="@/assets/media/TShirt1.jpg" height="300px;" class="card-img-top" alt="Carina Nebula captured by the Hubble Space Telescope" />
                            <div class="card-body">
                                <h5 class="card-title">Shirt #00 - POWER PUFF GIRLS</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ Shirt_price }}$</h6>
                                <!-- <h6 class="card-subtitle mb-2 text-muted">Quantity:{{ shirts }}</h6>-->
                                <!--<a class="btn btn-primary" @click="ShowDiv(), setShirtCount(shirts + 1)"><i class="fa fa-fw fa-shopping-cart"></i> Add to cart</a>-->
                                <button @click="nameModal = '#shirtsModal'" type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong"><i class="fas fa-scroll"></i> Submit Order</button>
                            </div>
                            <span class="corner-border-bottom"></span>
                        </div>
                    </div>
                    <!-- ************************MUG - MILITARY #00********************************** -->
                    <div class="col mb-3">
                        <!--mb-3: Fix for card height 100% issue with margin-->
                        <div class="card h-100 mb-0">
                            <!--mb-0: Fix for card height 100% issue with margin-->
                            <span class="corner-border-top"></span>
                            <img src="@/assets/media/mug-change.jpg" height="300px;" class="card-img-top" alt="Carina Nebula captured by the Hubble Space Telescope" />
                            <div class="card-body">
                                <h5 class="card-title">Mugs #00 - MILITARY</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ Mug_price }}$</h6>
                                <!-- <h6 class="card-subtitle mb-2 text-muted">Quantity:{{ mugs }}</h6> -->
                                <!--<a class="btn btn-primary" @click="ShowDiv(), setMugCount(mugs + 1)"><i class="fa fa-fw fa-shopping-cart"></i> Add to cart</a>-->
                                <button @click="nameModal = '#cupsModal'" type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong"><i class="fas fa-scroll"></i> Submit Order</button>
                            </div>
                            <span class="corner-border-bottom"></span>
                        </div>
                    </div>
                    <!-- ************************MUG - STARK #01 ********************************** -->
                    <div class="col mb-3">
                        <!--mb-3: Fix for card height 100% issue with margin-->
                        <div class="card h-100 mb-0">
                            <!--mb-0: Fix for card height 100% issue with margin-->
                            <span class="corner-border-top"></span>
                            <img src="@/assets/media/stark.png" height="300px;" class="card-img-top" alt="Carina Nebula captured by the Hubble Space Telescope" />
                            <div class="card-body">
                                <h5 class="card-title">Mugs #01 - STARK</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ Mug_price }}$</h6>
                                <!-- <h6 class="card-subtitle mb-2 text-muted">Quantity:{{ mugs }}</h6> -->
                                <!--<a class="btn btn-primary" @click="ShowDiv(), setMugCount(mugs + 1)"><i class="fa fa-fw fa-shopping-cart"></i> Add to cart</a>-->
                                <button @click="nameModal = '#cupsModal'" type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong"><i class="fas fa-scroll"></i> Submit Order</button>
                            </div>
                            <span class="corner-border-bottom"></span>
                        </div>
                    </div>
                    <!-- ************************MUG - COLLYN #02********************************** -->
                    <div class="col mb-3">
                        <!--mb-3: Fix for card height 100% issue with margin-->
                        <div class="card h-100 mb-0">
                            <!--mb-0: Fix for card height 100% issue with margin-->
                            <span class="corner-border-top"></span>
                            <img src="@/assets/media/collyn.png" height="300px;" class="card-img-top" alt="Carina Nebula captured by the Hubble Space Telescope" />
                            <div class="card-body">
                                <h5 class="card-title">Mugs #02 - COLLYN</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ Mug_price }}$</h6>
                                <!-- <h6 class="card-subtitle mb-2 text-muted">Quantity:{{ mugs }}</h6> -->
                                <!--<a class="btn btn-primary" @click="ShowDiv(), setMugCount(mugs + 1)"><i class="fa fa-fw fa-shopping-cart"></i> Add to cart</a>-->
                                <button @click="nameModal = '#cupsModal'" type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong"><i class="fas fa-scroll"></i> Submit Order</button>
                            </div>
                            <span class="corner-border-bottom"></span>
                        </div>
                    </div>
                    <!-- ************************MUG - CELESTE #03********************************** -->
                    <div class="col mb-3">
                        <!--mb-3: Fix for card height 100% issue with margin-->
                        <div class="card h-100 mb-0">
                            <!--mb-0: Fix for card height 100% issue with margin-->
                            <span class="corner-border-top"></span>
                            <img src="@/assets/media/celeste.png" height="300px;" class="card-img-top" alt="Carina Nebula captured by the Hubble Space Telescope" />
                            <div class="card-body">
                                <h5 class="card-title">Mugs #03 - CELESTE</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ Mug_price }}$</h6>
                                <!-- <h6 class="card-subtitle mb-2 text-muted">Quantity:{{ mugs }}</h6> -->
                                <!--<a class="btn btn-primary" @click="ShowDiv(), setMugCount(mugs + 1)"><i class="fa fa-fw fa-shopping-cart"></i> Add to cart</a>-->
                                <button @click="nameModal = '#cupsModal'" type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong"><i class="fas fa-scroll"></i> Submit Order</button>
                            </div>
                            <span class="corner-border-bottom"></span>
                        </div>
                    </div>
                    <!-- ***************CUSTOM ITEMS******************************************* -->
                    <div class="col mb-3">
                        <!--mb-3: Fix for card height 100% issue with margin-->
                        <div class="card h-100 mb-0">
                            <!--mb-0: Fix for card height 100% issue with margin-->
                            <span class="corner-border-top"></span>
                            <img src="@/assets/media/custom.jpg" height="300px;" class="card-img-top" alt="Carina Nebula captured by the Hubble Space Telescope" />
                            <div class="card-body">
                                <h5 class="card-title">Custom Items</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{ Custom_items }}</h6>
                                <button @click="nameModal = '#customModal'" type="button" class="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong"><i class="fas fa-scroll"></i> Request Form</button>
                            </div>
                            <span class="corner-border-bottom"></span>
                        </div>
                    </div>
                    <!-- ********************************************************** -->
                    <div style="padding-left: 2vh; padding-right: 2vh;">
                        <!-- <router-link style="text-decoration: none;" to="/cart">
                            <button class="btn btn-lg btn-block btn-success"><i class="fa fa-fw fa-coins"></i> Go to Checkout</button>
                        </router-link>-->
                    </div>
                    <div style="margin-bottom: 10vh;"></div>
                </div>
            </div>
            <br />
            <!--*****************************************-->
        </div>
    </div>
</template>

<script>
    import { store, mutations } from "../store";
    export default {
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
                alert: false,
                nameModal: "#customModal",
                checkedNames: [],
                Custom_items: "Get Quote ",
                Shirt_price: "15",
                Mug_price: "10",
                Mug_quantity: 0,
                Shirt_quantity: 0,
                Request_option: "",
                Request_quantity: 0,
                // CUSTOM VARIABLES
                Requested_items: "",
                options: [
                    {
                        slug: "Mugs",
                        name: "Mugs",
                    },
                    {
                        slug: "Shirts",
                        name: "Shirts",
                    },
                ],
                // SHIRTS VARIABLES
                Shirts_Requested_items: "",
                Shirts_options: [
                    {
                        slug: "SM - Polyester",
                        name: "SM - Polyester",
                    },
                    {
                        slug: "MD  - Polyester",
                        name: "MD - Polyester",
                    },
                    {
                        slug: "LG - Polyester",
                        name: "LG - Polyester",
                    },
                    {
                        slug: "XL  - Polyester",
                        name: "XL - Polyester",
                    },
                ],
                // CUPS VARIABLE
                Cups_Requested_items: "",
                Cups_options: [
                    {
                        slug: "White - 11OZ",
                        name: "White - 11OZ",
                    },
                    {
                        slug: "Black - 11OZ - Heat Changing",
                        name: "Black - 11OZ - Heat Changing",
                    },
                ],
                Cups_style_options: [
                    {
                        slug: "#00 - Military",
                        name: "#00 - Military",
                    },
                    {
                        slug: "#01 - Stark",
                        name: "#01 - Stark",
                    },
                    {
                        slug: "#02 - Collyn",
                        name: "#02 - Collyn",
                    },
                    {
                        slug: "#03 - Celeste",
                        name: "#03 - Celeste",
                    },
                ],
            };
        },
        created() {},
        methods: {
            setMugCount: mutations.setMugCount,
            setShirtCount: mutations.setShirtCount,
            cancelDiv: function () {
                this.alert = false;
            },
            ShowDiv: function () {
                this.alert = true;
                setTimeout(() => (this.alert = false), 3000);
            },
        },
        name: "shop",
        components: {},
    };
</script>

<style scoped>
    .form-control2 {
        height: 50px;
    }
</style>
