import React from 'react';
import Text from 'components/text'
const Contact = () =>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <input type="hidden" name="bot-field" />
        <label><Text align={'left'}>

            Email
        </Text>
            <input type="email" name="email" />
        </label>
        <label><Text align={'left'}>
            Nome</Text>
            <input type="text" name="name" />
        </label>
        <label><Text align={'left'}>
            Mensagem</Text>
            <input type="text" name="message" />
        </label>
        <p>
            <button type="submit">Enviar</button>
        </p>
    </form>


export default Contact;