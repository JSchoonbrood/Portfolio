import React, { useState } from "react";

const Form = () => {
	const [inputField, setInputField] = useState({
		contact_name: "",
		email: "",
		message: "",
	});

	const [emailValid, setValidity] = useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

    setInputField({...inputField, [name]: value,});
	};

	const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

    setInputField({...inputField, [name]: value,});
	};

	const validateEmail = (email: string) => {
		return (
			email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
		);
	}

	const submitChange = () => {
		if (validateEmail(inputField.email)) {
			setValidity(true);
			alert("True");
		} else {
			setValidity(false);
			alert("False");
		}
		
	};

	return (
		<div className="container__form">
			<form className="form">
				<label className="form__name">
					Name:
					<br />
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
					<div className="form__email-title">
						Email: 
						<span className="form__email-title-error">{emailValid ? "" : "Invalid Email, Please Try Again"}</span>
					</div>
					<br />
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
					<br />
					<textarea className="form__message-input"
						name="message"
						value={inputField.message}
						onChange={handleMessageChange}
						placeholder="Message"
						required></textarea>
				</label>
				<input type="submit" value="Submit" onClick={submitChange} className="form__submit" />
			</form>
		</div>
	);
};

export default Form;
