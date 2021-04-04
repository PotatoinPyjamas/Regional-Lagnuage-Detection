import './Input.css';
const Input = ({ title, sr, changeHandler, set, type }) => {
	return (
		<div className='inputContainer'>
			<img src={sr} className='input_img' />
			<input
				type='text'
				className='input'
				placeholder={title}
				value={type}
				onChange={(e) => changeHandler(e.target.value, set)}
			/>
		</div>
	);
};

export default Input;
