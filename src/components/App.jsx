import css from './Phonebook.module.css'
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm'
import Section from './Section/Section'
import React, { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const contactArray = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]

const App = () => {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || contactArray,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContact = e => {
    setFilter(e.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);


  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number
    };

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact])
    }
  }
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    )
  }

  return (
    <div className={css.container}>
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter
            filter={filter}
            filterContact={filterContact}
          />
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </Section>
      </>
    </div>
  );
};

export default App;
