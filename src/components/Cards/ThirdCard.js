import Button from '../UI/Button';
import Times from '../UI/Times';
import classes from './ThirdCard.module.css';
import qr from '../../assets/qr-code.png';

const ThirdCard = (props) => {
	let classLists = `${classes['card-third']} center  ${props.className}`;

	return (
		<section className={classLists} onClick={props.onOff}>
			<img src={qr} alt='' />
			<article>
				<h1>Here's my Card!</h1>
			</article>
			<Button onClick={props.onOff} className={classes['dark-button']}>
				<Times />
			</Button>
		</section>
	);
};

export default ThirdCard;
