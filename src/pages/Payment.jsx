


export function Payment() {



    return (

        <section className="payment-container">

            <form action="#">

                <h3 className="title">Payment Option</h3>

                <div className="inputBox">
                    <label for="cardNum">
                        Card number
                    </label>
                    <input type="text" id="cardNum"
                        placeholder="1111-2222-3333-4444"
                        maxlength="19" />
                </div>

                <div className="inputBox">
                    <label for="">Expiration date</label>
                    <input type="text" id="inputBox"
                        placeholder="00/00"
                        maxlength="5" />
                </div>

                <div className="inputBox">
                    <label for="cvv">Security code</label>
                    <input type="text" id="cvv"
                        placeholder="123"
                        maxlength="3" />
                </div>

                <div className="inputBox">
                    <label for="cardhold-name">
                        cardholder's name
                    </label>
                    <input type="text" id="cardhold-name"
                        placeholder=""
                        maxlength="3"
                    />
                </div>





                <input type="submit" value="Proceed to Checkout"
                    className="submit_btn" />
            </form>



        </section>

    )
}