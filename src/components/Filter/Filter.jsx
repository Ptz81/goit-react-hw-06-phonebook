import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { set } from 'redux/filtersSlice';
// import { setFilterValue } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  const { filter } = useSelector(getFilter)
  // const handleFilterChange = filter => dispatch(setFilterValue(filter));
console.log({ filter })
  const handleChange = e => {
    // handleFilterChange(e.currentTarget.value);
     const { value } = e.currentTarget;
    // dispatch(setFilterValue(value));
     dispatch(set(value));
  };

  return (
    <>
      <p className={css.filter_text}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        className={css.filter_input}
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};
export default Filter;
