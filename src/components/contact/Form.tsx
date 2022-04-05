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
		<div>
			<form>
				<label>
					Name:
					<input
						name="contact_name"
						type="string"
						value={inputField.contact_name}
						onChange={handleChange}
						placeholder="Name"
						required
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						name="email"
						type="string"
						value={inputField.email}
						onChange={handleChange}
						placeholder="Email"
						required
					/>
				</label>
				<br />
				<label>
					Message:
					<input
						name="message"
						type="string"
						value={inputField.message}
						onChange={handleChange}
						placeholder="Message"
						required
					/>
				</label>
				<input type="submit" value="Submit" onClick={submitChange} />
			</form>
		</div>
	);
};

export default Form;
