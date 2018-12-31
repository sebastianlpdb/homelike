import React from 'react';
import Button from './Button';
import InputText from './InputText';

const SearchBox = () => {
  const params = new URLSearchParams(window.location.search);
  
  return (
    <form action="/apartments">
      <InputText defaultValue={params.get('location')} name="location" type="text" placeholder="Search by location" />
      <Button primary>
        Search
      </Button>
    </form>
  );
}

export default SearchBox;