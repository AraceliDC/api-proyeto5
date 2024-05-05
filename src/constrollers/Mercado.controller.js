const mercadoPago = require('mercadopago')

mercadoPago.MercadoPagoConfig(process.env.PROD_ACCESS_TOKEN_VENDEDOR) 

const buyItem = async (req, res) => {
    try {

        const item = req.body
        const response = await mercadoPago.items.create(item)

        return res.json({
            checkoutid: response.body.id
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: message.error
        })
    }
}

module.exports = {buyItem}