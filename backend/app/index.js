const express = require('express')
const cors = require("cors");
const { checkJwt, attachUser } = require('./midleware/auth');
const app = express()
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');
const cartRoutes = require('./routes/cart.routes')
const orderRoutes = require('./routes/order.routes')


app.use(express.json());  

app.use(cors());


app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart',checkJwt , attachUser , cartRoutes )
app.use('/api/orders',checkJwt , attachUser , orderRoutes )
app.get('/api/profile', checkJwt, attachUser, (req, res) => {
  res.json({ user: req.user });
});



module.exports = app