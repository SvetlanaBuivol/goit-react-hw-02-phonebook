import React from 'react';
import { nanoid } from 'nanoid';
import ContactNameImput from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    return this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactNameImput onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filterContactsByName()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
