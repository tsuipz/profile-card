import { Fragment } from 'react';

import classes from './Skills.module.css';

const Skills = () => {
	const arrSkills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Go', 'Java'];

	return (
		<Fragment>
			<p>Skills</p>
			<section className={classes.skills}>
				{arrSkills.map((skill) => (
					<div key={Math.random().toString()}>{skill}</div>
				))}
			</section>
		</Fragment>
	);
};

export default Skills;
