import React from 'react';
import T from 'prop-types';
import s from './Input.module.scss';

function Input({
	fields,
	label,
	onChange,
	name,
	...props
}) {
	return (
		<div className={s.container}>
			<label htmlFor={name}>
				{label}
				<input 
					id={name}
					value={fields[name]} 
					onChange={(e) => onChange(name, e.target.value)} {...props}/>
			</label>
		</div>
	)
}

export default Input;