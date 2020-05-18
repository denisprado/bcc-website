import React from 'react';
import Text from 'components/text'
import { Label } from './contact.css'

const Contact = () =>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <input type="hidden" name="bot-field" />
        <Label>
            <Text align={'left'}>
                <span>Nome</span>
            </Text>
            <input type="text" name="name" />
        </Label>
        <Label>
            <Text align={'left'}>
                <span>Email</span>
            </Text>
            <input type="email" name="email" />
        </Label>
        <Label>
            <Text align={'left'}>
                <span>Mensagem</span>
            </Text>
            <textarea name="message" />
        </Label>
        <Label>
            <button type="submit"><Text align={'center'}><span>Enviar</span></Text></button>
        </Label>
    </form>


export default Contact;