import React from "react";
import { ContactItem } from './Сontact.styled';


const Contact = ({ id, name, number, onDeleteContact }) => (
    <ContactItem id={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button type='button' onClick={()=>onDeleteContact(id)}>Delete</button>
</ContactItem>
)

export default Contact;