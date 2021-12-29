import { useState } from 'react';

import FirstCard from './components/Cards/FirstCard';
import SecondCard from './components/Cards/SecondCard';
import ThirdCard from './components/Cards/ThirdCard';
import './App.css';

function App() {
	const [active, setActive] = useState('off');
	const [activeQR, setActiveQR] = useState('off');

	const activeHandler = () => {
		setActive('active');
	};

	const activeQRHandler = () => {
		setActiveQR('active');
	};

	const offHandler = () => {
		setActive('off');
		setActiveQR('off');
	};

	return (
		<main className='main center'>
			<div className='mainCard'>
				<FirstCard onActive={activeHandler} OnQR={activeQRHandler} />
				<SecondCard className={active} onOff={offHandler} />
				<ThirdCard className={activeQR} onOff={offHandler} />
			</div>
		</main>
	);
}

export default App;
