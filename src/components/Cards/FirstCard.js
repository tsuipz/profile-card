import Button from '../UI/Button';
import classes from './FirstCard.module.css';
import profile from '../../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FirstCard = (props) => {
	return (
		<section className={`${classes.card} center`}>
			<img src={profile} alt='' onClick={props.OnQR} />
			<article>
				<h1 className={classes['full-name']}>Patrick Tsui</h1>
				<p className={classes.job}>Software Engineer</p>
				<Button onClick={props.onActive}>
					<FontAwesomeIcon icon={(fas, faArrowRight)} className={classes.arrow} />
				</Button>
			</article>
		</section>
	);
};

export default FirstCard;
