import { useContext} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/CartContext';
import classes from './HeaderCartBtn.module.css';

const HeaderCartButton = (props) => {
  //access the cart context
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberOfCartItems = cartCtx.items.length;

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton
