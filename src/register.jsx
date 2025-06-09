import React, { useState } from "react"; 
import { Link } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("Hello World");
  };

  const updateCount = () => {
    setCount(count + 1);
  };

  const subtractCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Enter Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <p>
        <button>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Already a member? Login Here...</Link>
      </p>
      <hr />
      <button onClick={handleClick}>Click</button>
      <hr />

      {/* Updated Counter Section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        <button onClick={subtractCount} style={{ fontSize: "18px", padding: "5px 10px" }}>−</button>
        <span style={{ fontSize: "20px", minWidth: "30px", textAlign: "center" }}>{count}</span>
        <button onClick={updateCount} style={{ fontSize: "18px", padding: "5px 10px" }}>+</button>
      </div>
    </div>
  );
}
