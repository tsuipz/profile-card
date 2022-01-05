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

const socialLinks = {
	github: 'https://github.com/tsuipz',
	linkedin: 'https://www.linkedin.com/in/patricktsui--/',
	instagram: 'https://www.instagram.com/patricktsui_/',
	facebook: 'https://www.facebook.com/patrick.tsui.4',
	mail: 'mailto:patricktsui1995@gmail.com',
};

const Connect = () => {
	return (
		<Fragment>
			<p>Connect</p>
			<section className={classes.icons}>
				<a href={socialLinks.github} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={(fab, faGithub)} className={classes.icon} />
				</a>
				<a href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={(fab, faLinkedin)} className={classes.icon} />
				</a>
				<a href={socialLinks.instagram} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={(fab, faInstagram)} className={classes.icon} />
				</a>
				<a href={socialLinks.facebook} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={(fab, faFacebook)} className={classes.icon} />
				</a>
				<a href={socialLinks.mail}>
					<FontAwesomeIcon icon={(fas, faEnvelope)} className={classes.icon} />
				</a>
			</section>
		</Fragment>
	);
};

export default Connect;
