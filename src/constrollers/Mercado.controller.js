// const mercadopago = require('mercadopago')

// //mercadoPago.MercadoPagoConfig(process.env.PROD_ACCESS_TOKEN_VENDEDOR)
// const mercado = new mercadopago.MercadoPagoConfig(process.env.PROD_ACCESS_TOKEN_VENDEDOR)
// console.log(mercado)

// const buyItem = async (req, res) => {
//     try {

//         const item = req.body
//         const response = await mercado.items.create(item)

//         return res.json({
//             checkoutid: response.body.id
//         })
//     } catch (error) {
//         return res.json({
//             message: 'Error',
//             detail: message.error
//         })
//     }
// }

// module.exports = buyItem

const express = require('express');
const mercadopago = require('mercadopago');
const app = express();

mercadopago.configure({
    access_token: process.env.PROD_ACCESS_TOKEN_VENDEDOR
});

app.post('/crear_pago', async (req, res) => {
    try {
        const payment_data = {
            transaction_amount: 100,
            token: req.body.token,
            description: 'Descripción del pago',
            installments: 1,
            payment_method_id: 'visa',
            payer: {
                email: 'comprador@gmail.com'
            }
        };

        const payment = await mercadopago.payment.create(payment_data);

        res.json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el pago' });
    }
});

