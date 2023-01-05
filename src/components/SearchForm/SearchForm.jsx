import { useState } from 'react';
import { Input, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ onChange, value }) => {
  const [filmName, setFilmName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onChange(filmName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={value}
          placeholder='Enter correct film name. ex "SpiderMan"'
          onChange={e => setFilmName(e.target.value)}
        />
        <SearchBtn type="submit">SEARCH</SearchBtn>
      </form>
    </div>
  );
};

export default SearchForm;
