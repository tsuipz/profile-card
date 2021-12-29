import React from 'react';

import classes from './Skills.module.css';

const Skills = () => {
	const arrSkills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Go', 'Java'];

	return (
		<React.Fragment>
			<p>Skills</p>
			<section className={classes.skills}>
				{arrSkills.map((skill) => (
					<div key={Math.random().toString()}>{skill}</div>
				))}
			</section>
		</React.Fragment>
	);
};

export default Skills;
