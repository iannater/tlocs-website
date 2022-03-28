import React, { useState } from "react";
const Form = () => {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
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
    if (date.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (people.length <= 0) {
      tempErrors["message"] = true;
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
      const res = await fetch("/api/catering", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          date: date,
          people: people,
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
    console.log(fullname, email, date, people, message);
  };

  return (
    <div className="md:px-20 pb-10 flex justify-center">
      <div className="bg-carteringCard bg-no-repeat bg-cover md:rounded-lg shadow-lg lg:grid lg:grid-cols-2 max-w-7xl">
        <div className="p-10">
          <div id="form" className="pb-4 text-center">
            <h1 className="font-nmr text-4xl font-bold text-nmr-lightBrown">
              Thinking of Catering?
            </h1>
          </div>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="w-full space-y-5 p-2 md:py-5 md:px-10">
              <input
                name="fullname"
                type="text"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                placeholder="name"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
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
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
              ></input>
              {errors?.email && (
                <p className="text-red-500 bg-nmr-black rounded-lg px-2">
                  Email cannot be empty.
                </p>
              )}
              <input
                type="text"
                name="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                placeholder="date of the event"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
              ></input>
              {errors?.date && (
                <p className="text-red-500 bg-nmr-black rounded-lg px-2">
                  Cannot be empty.
                </p>
              )}
              <input
                type="text"
                name="people"
                value={people}
                onChange={(e) => {
                  setPeople(e.target.value);
                }}
                placeholder="number of people approx"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full "
              ></input>
              {errors?.people && (
                <p className="text-red-500 bg-nmr-black rounded-lg px-2">
                  Cannot be empty.
                </p>
              )}
              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows="3"
                placeholder="details about the event (time, type of venue, private party or company event, etc.)"
                className="bg-nmr-lightBrown px-5 py-2 rounded-md w-full shadow-md"
              ></textarea>
              {errors?.message && (
                <p className="text-red-500 bg-nmr-black rounded-lg px-2">
                  Message body cannot be empty.
                </p>
              )}
              <button
                type="submit"
                className="bg-nmr-black text-nmr-lightBrown font-nmr px-10 py-3 text-xl rounded-md"
              >
                Send
              </button>
            </div>
          </form>
          <div className="text-left pl-3">
            {showSuccessMessage && (
              <p className="text-white font-bold text-lg my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500 font-bold text-lg my-2">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Form;
