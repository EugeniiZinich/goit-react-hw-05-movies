const SearchForm = ({ onChange, value }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value}
          placeholder='Enter correct film name. ex "SpiderMan"'
          onChange={e => onChange(e.target.value)}
        />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default SearchForm;
