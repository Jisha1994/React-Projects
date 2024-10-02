import React, { useState } from "react";

function SignUp({onSwitch}) {
    const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validate = () => {
      let valid = true;
      const newErrors = {};
  
      if (!formData.email) {
        newErrors.email = "Email is required.";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email address is invalid.";
        valid = false;
      }
  
      if (!formData.password) {
        newErrors.password = "Password is required.";
        valid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long.";
        valid = false;
      }
  
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required.";
        valid = false;
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match.";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        alert("Sign Up successful!"); 
        setFormData({ email: "", password: "", confirmPassword: "" }); 
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
  
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
  
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
        </div>
  
        <button type="submit">Sign Up</button>
        <button type="button" onClick={onSwitch}>
          Click to Sign In
        </button>
      </form>
    );
  }

  export default SignUp