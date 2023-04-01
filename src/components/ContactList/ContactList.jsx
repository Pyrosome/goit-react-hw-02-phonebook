import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul style={{ listStyle:"none" }}>
          {contacts.map(({ name, number, id }) => (
            <li key={id} name={name} > {name}{' '}{number}
              <button style={{marginLeft: '30px'}} type='button' onClick={() => onDelete(id)}>delete</button>
            </li>
          ))}
        </ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};