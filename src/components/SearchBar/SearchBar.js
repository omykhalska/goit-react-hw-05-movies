import { FaSearch } from 'react-icons/fa';

import { Form, Input, SearchBtn } from './SearchBar.styled';

export function SearchBar({ onFormSubmit }) {
  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies"
      />
      <SearchBtn type="submit" aria-label="search">
        <FaSearch />
      </SearchBtn>
    </Form>
  );
}
