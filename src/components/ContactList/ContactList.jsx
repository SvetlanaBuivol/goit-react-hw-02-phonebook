import React from "react";
import { nanoid } from 'nanoid';
import Contact from "components/Contact/Contact";
import { Container } from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => (
    <Container>
        {contacts.map(contact => (
            <Contact
                key={nanoid()}
                name={contact.name}
                number={contact.number}
                id={contact.id}
                onDeleteContact={onDeleteContact}
            />
        ))}
    </Container>
)

export default ContactList;