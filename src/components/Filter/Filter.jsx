import React from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { SearchInput, Label } from './Filter.styled';

const Filter = ({ value, onChange, reset }) => (
  <Label>
    <SearchInput
      value={value}
      type="text"
      placeholder="Search by names..."
      pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]*)*$"
      name="search"
      onChange={onChange}
        />
        {!value && <BiSearch size="20"/>}
        {value && <BiX size="20" onClick={reset} />}
        
        
  </Label>
);

export default Filter;
