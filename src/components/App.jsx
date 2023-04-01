import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export class App extends Component {

  state = { 
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  };
  
  handleChange = evt => {
    const { name, value } = evt.target;
    
    if (name === "filter") {
      this.setState({
        [name]: value.toLocaleLowerCase()
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    }

    const exists = contacts.find(contact => contact.name === name);

    if (exists) {
      alert("This contact already exists.");
    }
    else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }))
    }
    
    this.reset();
  }

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }
  
  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '70px',
          fontSize: 20,
          color: '#010101'
        }}
      >

        <h1>Phonebook</h1>
        <ContactForm name={name} number={number} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <h2 style={{ margin: '0px', marginTop: '50px' }}>Contacts</h2>
        <Filter filter={this.handleChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
        
      </div>
    );
  };

}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
}