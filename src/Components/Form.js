import './Form.css';
import Input from './Input';
import fr from '../Assets/image 11.svg';
import too from '../Assets/image 10.svg';
import gen from '../Assets/image 16.svg';
import datee from '../Assets/image 5.svg';
import cl from '../Assets/aa.svg';
import btn from '../Assets/submit.svg';
import { useEffect, useState } from 'react';

const Form = ({ scam, clickHandler }) => {
	const [from, setForm] = useState('');
	const [to, setTo] = useState('');
	const [typ, setTyp] = useState('');
	const [date, setDate] = useState('');
	const [clas, setClas] = useState('');
	const changeHandler = (state, setState) => {
		setState(state);
	};
	useEffect(() => {
		if (scam) {
			setTimeout(() => {
				setForm('Mumbai');
			}, 5000);
			setTimeout(() => {
				setTo('Delhi');
			}, 10000);
			setTimeout(() => {
				setTyp('General');
			}, 15000);
			setTimeout(() => {
				setDate('05/04/2021');
			}, 20000);
			setTimeout(() => {
				setClas('General');
			}, 25000);
		}
	}, [scam]);
	return (
		<div className='form'>
			<div className='head'>
				<h1>BOOK TICKET</h1>
			</div>
			<div className='formi'>
				<div className='left'>
					<Input
						title='From'
						sr={fr}
						changeHandler={changeHandler}
						type={from}
						set={setForm}
					/>
					<Input
						title='To'
						sr={too}
						changeHandler={changeHandler}
						type={to}
						set={setTo}
					/>
					<Input
						title='General'
						sr={gen}
						changeHandler={changeHandler}
						type={typ}
						set={setTyp}
					/>
					<img
						src={btn}
						style={{ marginLeft: '10%', cursor: 'pointer' }}
						onClick={clickHandler}
					/>
				</div>
				<div className='right'>
					<Input
						title='DD/MM/YY'
						sr={datee}
						changeHandler={changeHandler}
						type={date}
						set={setDate}
					/>
					<Input
						title='ALL Classes'
						sr={cl}
						changeHandler={changeHandler}
						type={clas}
						set={setClas}
					/>
				</div>
			</div>
		</div>
	);
};

export default Form;
