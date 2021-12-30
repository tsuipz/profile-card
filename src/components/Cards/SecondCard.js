import Button from '../UI/Button';
import Times from '../UI/Times';
import Skills from '../Lists/Skills';
import Connect from '../Lists/Connect';
import classes from './SecondCard.module.css';

const SecondCard = (props) => {
	let classLists = `${classes['card-second']}  ${props.className}`;

	return (
		<section className={classLists}>
			<Skills />
			<Connect />
			<Button onClick={props.onOff}>
				<Times />
			</Button>
		</section>
	);
};

export default SecondCard;
