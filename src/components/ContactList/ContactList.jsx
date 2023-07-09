import React from "react";
import { nanoid } from 'nanoid';
import Contact from "components/Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(contact => (
            <Contact
                key={nanoid()}
                name={contact.name}
                number={contact.number}
                id={contact.id}
                onDeleteContact={onDeleteContact}
            />
        ))}
    </ul>
)

export default ContactList;