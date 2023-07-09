import React from 'react';
import { nanoid } from 'nanoid';
import Contact from 'components/Contact/Contact';
import { Container } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Container>
    {contacts.map(({ name, number, id }) => (
      <Contact
        key={nanoid()}
        name={name}
        number={number}
        id={id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </Container>
);

export default ContactList;
