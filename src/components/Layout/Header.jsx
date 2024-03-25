
import HeaderCartBtn from './HeaderCartBtn';
import image from '../pages/Air1.jpg'
import classes from './Headers.module.css';


const Header = (props) => {
    return (
    <>
        <header className={classes.header}>
            <h1>Rare Air Kicks</h1>
            <HeaderCartBtn onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={image} ></img>
        </div>
    </>)
}
export default Header;