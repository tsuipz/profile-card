import { Fragment } from 'react';

import classes from './ArrowRight.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArrowRight = () => {
	return (
		<Fragment>
			<FontAwesomeIcon icon={(fas, faArrowRight)} className={classes.arrow} />
		</Fragment>
	);
};

export default ArrowRight;
