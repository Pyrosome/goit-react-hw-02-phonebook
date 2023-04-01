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
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          //alignItems: 'center',
          marginLeft: '70vh',
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
          <label htmlFor='nameInput'> <h3>Number</h3>
            <input
              type="tel"
              name="number"
              value={number}
              onChange = {this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id='nameInput' required />
          </label>
          <br /><br />
          <button style={{
            fontSize: '20px'
           }} type='submit' onSubmit={this.handleSubmit}>Add contact</button>
        </form>
        
        <h2 style={{ margin: '0px', marginTop: '50px' }}>Contacts</h2>
        <form>
          <label htmlFor='filterInput'> <h3>Find contacts by name</h3>
            <input
              type="text"
              name="filter"
              value={filter}
              onChange = {this.handleChange}
              id='filterInput' required />
          </label>
        </form>
        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <li key={id} name={name} > {name}{' '}{number}
              <button style={{fontSize: '20px'}} type='button' onClick={() => this.handleDelete(id)}>delete</button>
            </li>
          ))}
        </ul>

      
      </div>
    );
  };
}