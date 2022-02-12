import React from 'react';
import { MyInput } from './ui/MyInput/MyInput'
import { MySelect } from './ui/MySelect/MySelect';

export const PostFilter = ({filter, setFilter}) => {

  const options = [
    { value: "title", name: "By title" },
    { value: "description", name: "By description" },
  ];

  const selectOnChange = (e) => {
    setFilter({...filter, sort: e.target.value});
  };

  return (
    <div>
      <MyInput
        type="text"
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        options={options}
        defaultValue={"Choose sort"}
        selectedValue={filter.sort}
        onChange={selectOnChange}
      />
    </div>
  );
};
