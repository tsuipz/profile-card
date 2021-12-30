import { Fragment } from 'react';

import classes from './Connect.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	fab,
	faGithub,
	faLinkedin,
	faInstagram,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const Connect = () => {
	return (
		<Fragment>
			<p>Connect</p>
			<section className={classes.icons}>
				<a href='https://github.com/tsuipz' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={(fab, faGithub)} className={classes.icon} />
				</a>
				<a
					href='https://www.linkedin.com/in/patricktsui--/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={(fab, faLinkedin)} className={classes.icon} />
				</a>
				<a href='https://www.instagram.com/patricktsui_/' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={(fab, faInstagram)} className={classes.icon} />
				</a>
				<a href='https://www.facebook.com/patrick.tsui.4' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={(fab, faFacebook)} className={classes.icon} />
				</a>
				<a href='mailto:patricktsui1995@gmail.com'>
					<FontAwesomeIcon icon={(fas, faEnvelope)} className={classes.icon} />
				</a>
			</section>
		</Fragment>
	);
};

export default Connect;
