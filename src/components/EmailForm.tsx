import React, { useId } from "react";

const EmailForm: React.FC = () => {
    const emailId = useId();

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                maxWidth: '400px',
                margin: 'auto'
            }}
        >
            <label
                htmlFor={emailId}
                style={{
                    marginBottom: '8px',
                    fontSize: '1rem',
                    color: '#333'
                }}
            >
                Email:
            </label>
            <input
                id={emailId}
                type="email"
                placeholder="Enter your email"
                required
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    marginBottom: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
            >
                Subscribe
            </button>
        </form>
    );
};

export default EmailForm;