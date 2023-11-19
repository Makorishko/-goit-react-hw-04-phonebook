export const Filter = ({ changeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={changeFilter} type="search" name="text" />
    </>
  );
};