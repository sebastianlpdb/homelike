import React from 'react';
import Button from './Button';
import InputText from './InputText';

const SearchBox = props => {
  return (
    <form action="/location">
      <InputText name="location" type="text" placeholder="Search by location" />
      <Button primary>
        Search
      </Button>
    </form>
  );
}

export default SearchBox;