import styled from 'styled-components';
import iconSearch from '../../assets/icons/icon-search.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  max-width: 750px;
`;

const StyledInput = styled.input`
  background-color: #d9d9d9;
  width: 100%;
  padding: 18px 100px;
  border-radius: 25px;
  font-size: 20px;
  outline: none;
  border: none;

  &::placeholder {
    font-size: 20px;
    color: #524e4e;
    font-weight: 200;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  left: 40px;
  top: 10px;
  width: 40px;
  height: 40px;
`;

export const Form = () => {
  const [search, setSearch] = useState<string>('');

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim()) {
      console.log(search);
      setSearch('');
    }
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledImage
        src={iconSearch}
        alt="icon-search"
        aria-label="Search Icon"
      />
      <StyledInput
        type="text"
        placeholder="Search location..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </StyledForm>
  );
};
