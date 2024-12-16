import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            submitted: false,
            error: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone } = this.state;

        if (!name || !email || !phone) {
            this.setState({ error: 'All fields are required!' });
            return;
        }

        axios.post('https://jsonplaceholder.typicode.com/users', {
            name, email, phone
        })
            .then(response => {
                console.log('Registration Success:', response.data);
                this.setState({ submitted: true, error: '' });
            })
            .catch(error => {
                console.error('There was an error!', error);
                this.setState({ error: 'An error occurred!' });
            });
    }

    render() {
        const { name, email, phone, submitted, error } = this.state;

        return (
            <div className="form-container">
                <h2>Register User</h2>
                {submitted ? (
                    <p className="success">User registered successfully!</p>
                ) : (
                    <form onSubmit={this.handleSubmit}>
                        {error && <p className="error">{error}</p>}
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Register</button>
                    </form>
                )}
            </div>
        );
    }
}

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setEmployees(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching employees:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="employee-list">
            <h2>Employee List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid-container">
                    {employees.map((employee) => (
                        <div key={employee.id} className="employee-card">
                            <h3>{employee.name}</h3>
                            <p>Email: {employee.email}</p>
                            <p>Phone: {employee.phone}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <h1>Employee Registration & List</h1>
            <RegisterForm />
            <EmployeeList />
        </div>
    );
}

export default App;
