import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';
import { useState } from 'react';

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState("")

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }
  const reset = () => {
    setName('')
    setNumber('')
  }
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name: name, number:number });
    reset();
  }
    return (
      <form className={css.form}onSubmit={handleSubmit}>
        <label htmlFor='name' className={css.form_label}>
          Name
        </label>
        <input
          type="text"
            name="name"
            id = 'name'
            value={name}
            className={css.form_input}
            onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor='number' className={css.form_label}>
          Number
        </label>
        <input
          type="tel"
            name="number"
            id='number'
            value={number}
            className={css.form_input}
            onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
      <input type="submit" className={css.btn} value='Add contact'/>
      </form>
    )
  }
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
