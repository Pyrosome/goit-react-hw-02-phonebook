import PropTypes from 'prop-types';

export const ContactForm = ({ name, number, onChange, onSubmit}) => {
    return (
        <form 
          onSubmit={onSubmit}>
          <label htmlFor='nameInput'><h3>Name</h3>
            <input
              type="text"
              name="name"
              value={name}
              onChange = {onChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id='nameInput' required />
          </label> 
          <label htmlFor='nameInput'> <h3>Number</h3>
            <input
              type="tel"
              name="number"
              value={number}
              onChange = {onChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id='nameInput' required />
          </label>
          <br /><br />
          <button style={{
            fontSize: '20px'
           }} type='submit' onSubmit={onSubmit}>Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};