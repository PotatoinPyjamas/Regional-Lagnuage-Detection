import './Input.css';
const Input = ({ title, sr }) => {
	return (
		<div className='inputContainer'>
			<img src={sr} className='input_img' />
			<input type='text' className='input' placeholder={title} />
		</div>
	);
};

export default Input;
