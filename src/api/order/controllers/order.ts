/**
 * order controller
 */

import { factories } from '@strapi/strapi'
const stripe = require("stripe")(
    "secret_key_from_stripe"
);

function calcDiscountPrice(price, discount) {
    if (!discount) return price;

    const discountAmount = (price * discount) / 100;
    const result = price - discountAmount;

    return result.toFixed(2);
}

export default factories.createCoreController('api::order.order', ( { strapi }) => ({
    /* async paymentOrder(ctx) {
        const { token, products, idUser, addressShipping } = ctx.request.body

        let totalPayment = 0;
        products.forEach(product => {
            const priceTemp = calcDiscountPrice(
                product.attributes.price,
                product.attributes.discount
            );

            totalPayment += Number(priceTemp) * product.quantity;
        });

        const charge = await stripe.charges.create({
            amount: Math.round(totalPayment * 100),
            currency: "eur",
            source: token.id,
            description: `User ID: ${idUser}`
        });

        const data = {
            products,
            user: idUser,
            totalPayment,
            idPayment: charge.id,
            addressShipping,
        };

        const model = strapi.contentTypes["api::order.order"];
        const validData = await strapi.entityValidator.validateEntityCreation(
            model,
            data
        );

        const entry = await strapi.db
            .query("api::order.order")
            .create({ data: validData });

        return entry;
    }, */
}));
