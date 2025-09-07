import { Grid, Typography } from '@mui/material';
import CartList from '../../component/CartList'


const Cart = ()=>{
    // src/data/cartItems.js
    const onRemove = ()=>{
        console.log("remove Icon");
    }
 const cartItems = [
  {
    id: 1,
    title: "Vanilla Ice Cream Scoop",
    image: "https://via.placeholder.com/150?text=Vanilla",
    price: 3.5,
    quantity: 2,
  },
  {
    id: 2,
    title: "Chocolate Fudge Scoop",
    image: "https://via.placeholder.com/150?text=Chocolate",
    price: 4.0,
    quantity: 1,
  },
  {
    id: 3,
    title: "Strawberry Delight Scoop",
    image: "https://via.placeholder.com/150?text=Strawberry",
    price: 3.8,
    quantity: 3,
  },
  {
    id: 4,
    title: "Mint Chip Scoop",
    image: "https://via.placeholder.com/150?text=Mint+Chip",
    price: 4.2,
    quantity: 1,
  },
  {
    id: 5,
    title: "Cookie Dough Scoop",
    image: "https://via.placeholder.com/150?text=Cookie+Dough",
    price: 4.5,
    quantity: 2,
  },
];

    return (
        <Grid>
            <Typography mb={5} mt={2} fontWeight={600} fontSize={34}>Cart Item List</Typography>
            <CartList cartItems={cartItems} onRemove={onRemove}/>
        </Grid>
    )
}


export default Cart;