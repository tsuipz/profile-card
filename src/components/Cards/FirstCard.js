import Button from '../UI/Button';
import ArrowRight from '../UI/ArrowRight';
import classes from './FirstCard.module.css';
import profile from '../../assets/profile.jpg';

const FirstCard = (props) => {
	return (
		<section className={`${classes.card} center`}>
			<img src={profile} alt='' onClick={props.OnQR} />
			<article>
				<h1 className={classes['full-name']}>Patrick Tsui</h1>
				<p className={classes.job}>Software Engineer</p>
				<Button onClick={props.onActive}>
					<ArrowRight />
				</Button>
			</article>
		</section>
	);
};

export default FirstCard;
