import  React from 'react';
import { Input } from 'semantic-ui-react'



const Search = (props) => {
  return (
    <Input placeholder="Search..." onChange={event => props.keywords(event)} fluid/>
  );
};

export default Search;