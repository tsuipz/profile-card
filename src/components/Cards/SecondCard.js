import Button from '../UI/Button';
import Skills from '../Lists/Skills';
import Connect from '../Lists/Connect';
import classes from './SecondCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faTimes } from '@fortawesome/free-solid-svg-icons';

const SecondCard = (props) => {
	let classLists = `${classes['card-second']}  ${props.className}`;

	return (
		<section className={classLists}>
			<Skills />
			<Connect />
			<Button onClick={props.onOff}>
				<FontAwesomeIcon icon={(fas, faTimes)} />
			</Button>
		</section>
	);
};

export default SecondCard;
