import React, {useState, useEffect} from 'react'
import Axios from 'axios';

function AddUser() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // const users = [ 
    //     { 
    //         email: 'v-kumate@microsoft.com', 
    //         username: 'Kumaraswamy'
    //     },
    //     {
    //         email: 'v-abhay@microsoft.com',
    //         username: 'Abhay Nandan'
    //     }
    // ]
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorMsg('');
        setStatusMsg('');
        setUsername('');
    }
    const isValidEmail = (e) => {
        e.preventDefault();

        let validEmail = /^[A-Za-z0-9.-]+(@microsoft.com)$/g;

        if(!validEmail.test(email)) {
            setErrorMsg('Invalid email address');
        } else {
            //setStatusMsg('Success!, valid email address');
        }
        
    }
    const fetchData = () => {
        Axios.get('https://api.myjson.com/bins/c82pw')
            .then((res) => {
                console.log(res)
                let users = res.data
                users.map((user) => {
                    if(email === user.email) {
                        setUsername(user.username)
                    }
                })
            })
            .catch((err) => {
                console.log('Failed to fetch data' + err);
            })
        
    }
    return (
        <div>
            <h2>Add User</h2>
            <p className="statusMsg">{statusMsg}</p>
            <form onSubmit={fetchData}>
                <label>Email</label>
                <input type="text" placeholder="Enter email" onChange={handleEmailChange}/><br/>
                <span className="errorMsg">{errorMsg}</span><br/>
                <button onClick={isValidEmail}>Verify Email</button><br/><br/>
                <label>Username</label>
                <input type="text" disabled value={username}/>
            </form>
        </div>
    )
}

export default AddUser
