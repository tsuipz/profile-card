import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faTimes } from '@fortawesome/free-solid-svg-icons';

const Times = () => {
	return (
		<Fragment>
			<FontAwesomeIcon icon={(fas, faTimes)} />
		</Fragment>
	);
};

export default Times;
