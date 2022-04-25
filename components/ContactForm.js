import React, { useState } from "react";

const ContactForm = () => {
	// States for contact form fields
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	//   Form validation state
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState("Send");

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Validation check method
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (fullname.length <= 0) {
			tempErrors["fullname"] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors["subject"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	//   Handling form submit

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					email: email,
					fullname: fullname,
					subject: subject,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText("Send");
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText("Send");
		}
		console.log(fullname, email, subject, message);
		email.value = "";
		fullname.value = "";
		subject.value = "";
		message.value = "";
	};

	return (
		<div className="w-full">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col space-y-4 px-5 md:px-10 w-full"
			>
				<input
					name="fullname"
					type="text"
					value={fullname}
					onChange={(e) => {
						setSubject(e.target.value);
						setFullname(e.target.value);
					}}
					placeholder="name"
					className="rounded-md bg-[#F1E8DC] px-2 py-2"
				></input>
				{errors?.fullname && (
					<p className="text-red-500 bg-nmr-black rounded-lg px-2">
						Name cannot be empty.
					</p>
				)}
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder="email address"
					className="rounded-md bg-[#F1E8DC] px-2 py-2"
				></input>
				{errors?.email && (
					<p className="text-red-500 bg-nmr-black rounded-lg px-2">
						Email cannot be empty.
					</p>
				)}
				<textarea
					name="message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					rows="3"
					placeholder="type your message here!"
					className="rounded-md bg-[#F1E8DC] px-2 py-2"
				></textarea>
				{errors?.message && (
					<p className="text-red-500 bg-nmr-black rounded-lg px-2">
						Message body cannot be empty.
					</p>
				)}
				<div className="pt-3 text-center">
					<button
						type="submit"
						className="px-10 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-nmr-lightBrown hover:text-nmr-black duration-300  bg-nmr-black text-[#F1E8DC] rounded-md text-lg font-bold font-nmr md:w-48"
					>
						Send
					</button>
				</div>
			</form>
			<div className="text-left pl-3">
				{showSuccessMessage && (
					<p className="text-white font-bold text-lg my-2">
						Thank you! Your message has been delivered.
					</p>
				)}
				{showFailureMessage && (
					<p className="text-red-500 font-bold text-lg my-2">
						Oops! Something went wrong, please try again.
					</p>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
