import React from "react";


const Contact = ({ id, name, number, onDeleteContact }) => (
    <li id={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button type='button' onClick={()=>onDeleteContact(id)}>Delete</button>
</li>
)

export default Contact;