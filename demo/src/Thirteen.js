import React, { useState } from 'react';

function Thirteen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const toggleAuthMode = () => {
        setIsRegistered(!isRegistered);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            setIsLogin(true); // simulate login or registration success
            console.log(`${isRegistered ? "Logged in" : "Registered"} with`, email);
        } else {
            alert("Please fill in both fields.");
        }
    };

    const handleLogout = () => {
        setIsLogin(false);
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            {isLogin ? (
                <div>
                    <h1>Welcome: {email}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>{isRegistered ? "Login" : "Regester"}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <br />
                        <p>
                            {isRegistered ? "Don't have an account? " : "Already have an account? "}
                            <span
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={toggleAuthMode}
                            >
                                {isRegistered ? "Register Now" : "Login Now"}
                            </span>
                        </p>
                        <button type="submit">
                            {isRegistered ? "Login" : "Register"}
                        </button>
                    </form>
                </div>

            )}
        </div>
    );
}

export default Thirteen;
