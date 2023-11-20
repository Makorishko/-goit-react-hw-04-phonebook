import { ContactForm } from './form/form';
import { Filter } from './filter';
import { useState, useEffect } from 'react';
import { ContactList } from './list/list';
import { Wrapper } from './wrapper-styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filters, setFilters] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isSame = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isSame) {
      return alert('This name already exist');
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const changeFilter = evt => {
    setFilters(evt.target.value);
  };

  const deleteElementsOfList = contact => {
    setContacts(contacts.filter(item => item.id !== contact.id));
  };

  const getFilteredList = () => {
    if (contacts.length) {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(filters.toLowerCase())
      );
    } else {
      return [];
    }
  };

  const filteredList = getFilteredList();
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      <ContactList
        contacts={filteredList}
        deleteElementsOfList={deleteElementsOfList}
      />
    </Wrapper>
  );
};
