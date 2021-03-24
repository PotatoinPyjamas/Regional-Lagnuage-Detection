import './App.css';
import Box from './Components/Box';
import Form from './Components/Form';
import Msg from './Components/Msg';
import img from './Assets/Group 2.svg';
import { ReactMic } from 'react-mic';
import { useState } from 'react';

function App() {
	const onData = (recordedBlob) => {
		console.log('chunk of real-time data is: ', recordedBlob);
	};

	const onStop = (recordedBlob) => {
		console.log('recordedBlob is: ', recordedBlob);
	};
	const [rec, setRec] = useState(false);
	return (
		<div className='App'>
			<div
				style={{
					height: '15%',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div className='as'>INDIAN RAILWAYS</div>
			</div>
			<Box>
				<Form />
				<Msg />
			</Box>
			<div
				style={{
					position: 'fixed',
					bottom: '5%',
					right: '5%',
					width: '30vw',
					display: 'flex',
				}}
			>
				<ReactMic
					record={rec}
					className='sound-wave'
					onStop={onStop}
					onData={onData}
					strokeColor='#000000'
					backgroundColor='#FF4081'
				/>
				<img
					src={img}
					style={{ cursor: 'pointer' }}
					onClick={() => setRec((prev) => !prev)}
				/>
			</div>
		</div>
	);
}

export default App;
