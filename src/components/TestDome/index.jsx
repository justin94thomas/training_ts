import React, { useState, useEffect } from "react";

const PriceCalculator = () => {
    const [type, setType] = useState('standard');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');


    useEffect(() => {
        const numericPrice = parseFloat(price);
        const numericWeight = parseFloat(weight);
        let discount = 0;

        if (!isNaN(numericPrice)) {
            if (type === "standard") {
                discount = numericPrice * 0.06;
            } else if (type === "seasonal") {
                discount = numericPrice * 12 / 100;
            } else if (type === "weight") {
                if (!isNaN(numericWeight)) {
                    if (numericWeight <= 10) {
                        discount = numericPrice * 0.6;
                    } else {
                        discount = numericPrice * 0.18;
                    }
                }
            }

            const finalPrice = numericPrice - discount;
            setDiscountedPrice(finalPrice.toFixed(2));
        } else {
            setDiscountedPrice("");
        }
    }, [type, price, weight]);



    return (
        <div>
            <label htmlFor="type" > Select Type: </label>
            < select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="standard" > Standard </option>
                < option value="seasonal" > Seasonal </option>
                < option value="weight" > Weight </option>
            </select>

            < label htmlFor="weight" > Weight(kg): </label>
            < input type="number" id="weight" name="weight" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)} />

            < label htmlFor="totalPrice" > Total Price($): </label>
            < input type="number" id="totalPrice" name="totalPrice" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />

            < div > Discounted price: <span id="discountedPrice" > {discountedPrice} </span></div >
        </div>
    );
};

export default PriceCalculator