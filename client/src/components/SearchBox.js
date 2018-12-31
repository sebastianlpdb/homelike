import React from 'react';
import Button from './Button';
import InputText from './InputText';

const SearchBox = () => {
  return (
    <form action="/apartments">
      <InputText name="location" type="text" placeholder="Search by location" />
      <Button primary>
        Search
      </Button>
    </form>
  );
}

export default SearchBox;