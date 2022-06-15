import { useEffect, useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  useEffect(() => {
    const errors = [];
    if (!name.length) errors.push("Please enter your name");
    if (!email.includes("@")) errors.push("Please provide a valid email");
    setValidationErrors(errors);
  }, [name, email]);
  const onSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (validationErrors.length) return alert("Can't Submit");
    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date()
    };
    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setValidationErrors([]);
    setHasSubmitted(false);
  };
  return (
    <div>
      <h2>Contact Us</h2>
      {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following Errors were found:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
