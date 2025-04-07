import React from 'react'

export default function Checkout() {
    return (
        <>
            <h1 classname="font-bold size-5 " >Checkout</h1>
            <div>
                <h2>
                    Your Cart
                </h2>

                {
                    <div>
                        <img />

                        <div>
                            <h3>Products 1</h3>
                            <span>R$ 200</span>

                            <div>
                                <button>
                                    <img></img>
                                </button>

                                <span>1</span>

                                <button>
                                    <img></img>
                                </button>
                            </div>
                        </div>
                    </div>
                }

                <div>
                    <h4>
                        Order Summary
                    </h4>

                    <div>
                        <h5>Subtotal</h5>

                        <span> {subtotalValule} </span>
                    </div>

                    <div>
                        <h4>Shipping</h4>

                        <span> {ShippingValue} </span>
                    </div>

                    <div>
                        <h4>Tax</h4>

                        <span> {taxValule} </span>
                    </div>

                    <div>
                        <h4>Total</h4>

                        <span> {totalValule} </span>
                    </div>
                </div>

                <form>
                    <section>
                        <div>
                            <img></img>

                            <h5>Delivery Information</h5>
                        </div>
                        <div>
                            <input placeholder='First Name' type="text">
                            </input>

                            <input placeholder='Last Name' type="text">
                            </input>
                        </div>

                        <input placeholder='Address'></input>

                        <div>
                            <input placeholder='City' type="text">
                            </input>

                            <input placeholder='Postal Code' type="number">
                            </input>
                        </div>
                    </section>

                    <section>
                        <div>
                            <img></img>

                            <h5>Payment Information</h5>
                        </div>

                        <input placeholder='Card Number' type="number">
                        </input>


                        <div>
                            <input placeholder='MM/YY' type="text">
                            </input>

                            <input placeholder='CVC' type="number">
                            </input>
                        </div>
                    </section>

                    <button>Complete Purchase</button>
                </form>

            </div>
        </>
    )
}