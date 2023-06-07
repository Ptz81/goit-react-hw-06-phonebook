
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({filter, filterContact}) =>{

    return (
      <>
      <p className={css.filter_text}>
        Find contacts by name
      </p>
        <input
        type="text"
        name="filter"
        className={css.filter_input}
        value={filter}
        onChange={filterContact}
        />
      </>
    )
  }


Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
}

export default Filter;
