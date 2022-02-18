import React from 'react';
import { Input } from './ui/Input/Input'
import { Select } from './ui/Select/Select';

export const PostFilter = ({filter, setFilter}) => {

  const options = [
    { value: "title", name: "By title" },
    { value: "body", name: "By description" },
  ];

  const selectOnChange = (e) => {
    setFilter({...filter, sort: e.target.value});
  };

  return (
    <div>
      <Input
        type="text"
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <Select
        options={options}
        defaultValue={"Choose sort"}
        selectedValue={filter.sort}
        onChange={selectOnChange}
      />
    </div>
  );
};
