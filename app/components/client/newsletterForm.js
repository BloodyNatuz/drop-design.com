'use client'

import { useState } from 'react'

export default function NewsletterForm(){

    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/api/newsletter', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email})
            })
            if (response.data.success){
                console.log("OK")
            }
        }

        catch (error){
            if (error.response){
                setError(error.response.data.message)
            }
        }
    }

    return (
        <form className='newsletter-input' action="#" method='POST' onSubmit={handleSubmit}>
            <input type="email" name='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Recevoir la newsletter"></input>
            <button type='submit'><img src='/img/search.svg'></img></button>
        </form>
    )
}