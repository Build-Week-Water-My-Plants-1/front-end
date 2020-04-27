import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'

const LoginForm = props => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { register, handleSubmit, errors } = useForm({ validationSchema: schema });


    const onSubmit = () => {
        //console.log(credentials)
        axiosWithAuth()
            .post('', credentials)
            .then(res => {
                // console.log('logging in', res)
                window.localStorage.setItem('token', res.data.token)
                setCredentials({ username: '', password: '' });
                props.history.push('/login')
            })
            .catch(err => console.log(err))
    }

}
