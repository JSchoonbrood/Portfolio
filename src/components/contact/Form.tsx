import React, { useState } from "react";

const Form = () => {
	const [inputField, setInputField] = useState({
		contact_name: "",
		email: "",
		message: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

    setInputField({...inputField, [name]: value,});
	};

	const submitChange = () => {
		alert("Submitted");
	};

	return (
		<div className="container__form">
			<form className="form">
				<label className="form__name">
					Name:
					<input className="form__name-input"
						name="contact_name"
						type="string"
						value={inputField.contact_name}
						onChange={handleChange}
						placeholder="Name"
						required
					/>
				</label>
				<br />
				<label className="form__email">
					Email:
					<input className="form__email-input"
						name="email"
						type="string"
						value={inputField.email}
						onChange={handleChange}
						placeholder="Email"
						required
					/>
				</label>
				<br />
				<label className="form__message">
					Message:
					<input className="form__message-input"
						name="message"
						type="string"
						value={inputField.message}
						onChange={handleChange}
						placeholder="Message"
						required
					/>
				</label>
				<input type="submit" value="Submit" onClick={submitChange} className="form__submit" />
			</form>
		</div>
	);
};

export default Form;
