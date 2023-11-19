import { ListOfContacts } from './list-styled';

export const ContactList = ({ contacts, deleteElementsOfList }) => {
  return (
    <ul>
      {contacts.map(item => (
        <ListOfContacts key={item.id}>
          {item.name}: {item.number}
          <button onClick={() => deleteElementsOfList(item)} type="button">
            Delete
          </button>
        </ListOfContacts>
      ))}
    </ul>
  );
};
