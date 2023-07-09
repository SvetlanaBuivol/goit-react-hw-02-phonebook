import React from 'react';
import { nanoid } from 'nanoid';
import ContactNameImput from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmit = ({name, number}) => {
     const newContact = {
      name,
      number,
      id: nanoid(),
    };

    return this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = (contactId) => {
    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const contacts = this.state.contacts;

    return (
      <>
        <ContactNameImput onSubmit={this.formSubmit} />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
