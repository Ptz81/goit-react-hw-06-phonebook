import React from "react";
import css from '../Phonebook.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const {filter} = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  if (!contacts) {
    return null
  };
   let contactItems = contacts;
  if (filter) {
     console.log(filter)
    contactItems.filter(item => item.name.includes(filter));
  }
    return (
       <ul className={css.contact_list}>
        {contactItems.map((contact) => {
          return (
            <li className={css.contact_item} key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   })),
//   deleteContact: PropTypes.func,
// }

export default ContactList;
