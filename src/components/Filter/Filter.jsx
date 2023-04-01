import PropTypes from 'prop-types';

export const Filter = ({ filter }) => {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <input
              type="text"
              name="filter"
              onChange = {filter}
                id='filterInput' required />
        </div> 
    )
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};