import { useState } from "react";

const User = ({ user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <div>ID: {user.id}</div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />

        <input
          type="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </form>
    </div>
  );
};

export default User;
