// Import Libraries
import axios from 'axios'
import swAlert from '@sweetalert/with-react'
import { useHistory, Redirect } from 'react-router-dom'

export default function Login () {
    const history = useHistory()

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/


        if(email === '' || password === '') {
            swAlert(
                <h3 style={{color: 'lightblue'}}>All the fields must be completed</h3>
            )
            return
        }
        if(email !== '' && !regexEmail.test(email)) {
            swAlert(
                <h3 style={{color: 'lightblue'}}>You must enter a valid email address</h3>
            )
            return
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(
                <h3 style={{color: 'lightblue'}}>Invalid credentials</h3>
            )
            console.log('credenciales inválidas')
            return
        }
        console.log('Welcome!')
        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then(res => {
                swAlert(
                    <h2>Log in succesfully!</h2>
                )
                const tokenReceived = res.data.token
                localStorage.setItem('token', tokenReceived)
                history.push('/listado')
            })
    }

    let token = localStorage.getItem('token')

    return (
        <>
            { token && <Redirect to='/listado' />}

            <h2>!Devs | Movies</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Email: </span> <br />
                    <input type="text" name="email" placeholder="Introduce your email"/> <br />
                </label>
                <br />
                <label>
                    <span>Password: </span> <br />
                    <input type="password" name="password" placeholder="Introduce your password"/>
                    <br />
                </label>
                <br />
                <br />
                <button type="submit">Log in</button>
            </form>
        </>
    )
}
