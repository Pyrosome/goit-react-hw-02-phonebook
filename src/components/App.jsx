import React, { Component } from 'react';
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
    number: ''
  };
  
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    })
  }
  
  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }
  
  render() {
    const { contacts, name, number } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <form 
          onSubmit={this.handleSubmit}>
          <label htmlFor='nameInput'><h3>Name</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange = {this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id='nameInput' required />
          </label> 
          <label htmlFor='nameInput'> <h3>Phone number</h3>
            <input
              type="tel"
              name="number"
              value={number}
              onChange = {this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id='nameInput' required />
          </label>
          <button type='submit' onSubmit={this.handleSubmit}>Add contact</button>
        </form>
        
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} name={contact.name} > {contact.name}{' '}{contact.number} </li>
          ))}
        </ul>

      
      </div>
    );
  };
}