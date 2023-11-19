import { nanoid } from 'nanoid';
import { Form } from './form-styled';
import { FormContainer } from './form-styled';

export const ContactForm = ({ addContact }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    addContact({ name, number, id: nanoid() });
    form.reset();
  };
  return (
    <FormContainer>
      {' '}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="number">Number</label>
        <input type="tel" name="number" id="number" required />
        <button type="submit">Add contact</button>
      </Form>
    </FormContainer>
  );
};
