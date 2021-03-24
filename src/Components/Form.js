import './Form.css';
import Input from './Input';
import fr from '../Assets/image 11.svg';
import to from '../Assets/image 10.svg';
import gen from '../Assets/image 16.svg';
import date from '../Assets/image 5.svg';
import cl from '../Assets/aa.svg';
import btn from '../Assets/btn.svg';
const Form = () => {
	return (
		<div className='form'>
			<div className='head'>
				<h1>BOOK TICKET</h1>
			</div>
			<div className='formi'>
				<div className='left'>
					<Input title='From' sr={fr} />
					<Input title='To' sr={to} />
					<Input title='General' sr={gen} />
					<img
						src={btn}
						style={{ marginLeft: '10%', cursor: 'pointer' }}
					/>
				</div>
				<div className='right'>
					<Input title='DD/MM/YY' sr={date} />
					<Input title='ALL Classes' sr={cl} />
				</div>
			</div>
		</div>
	);
};

export default Form;
