// import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import styleable from 'react-styleable'

// import css from './nav.module.css'

const ENTER_KEY_CODE = 'Enter';
const BACKSPACE_KEY_CODE = 'Backspace';
const DELETE_KEY_CODE = 'Delete';

const ONLY_NUMBERS_REGEX = /[^\d]/g;

const SearchBar = ({ onSearch }) => {
  const [cpf, setCPF] = useState('');
  const [preventChange, setPreventChange] = useState(false);

  const maskCPF = (value) => {
    const cleanCPF = value.replace(ONLY_NUMBERS_REGEX, '');
    switch (cleanCPF.length) {
      case 4:
      case 5:
      case 6:
        return cleanCPF.replace(/^(\d{3})(\d{0,3})$/, '$1.$2');
      case 7:
      case 8:
      case 9:
        return cleanCPF.replace(/^(\d{3})(\d{3})(\d{0,3})$/, '$1.$2.$3');
      default:
        return cleanCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2})$/, '$1.$2.$3-$4');
    }
  }

  const handleKeyDown = (e) => {
    // e.preventDefault();
    console.log('e.key0: ', e.key);
    console.log('e.code0: ', e.code);
    console.log('e.keyCode0: ', e.keyCode);
    console.log('e.which0: ', e.which);
    console.log('e.target.value ----> ', e.target.value);
    // if (![DELETE_KEY_CODE, BACKSPACE_KEY_CODE].includes(e.key)) {
    //   setCPF(maskCPF(e.target.value));
    // } else {
    //   setCPF(e.target.value);
    // }

    setPreventChange(
      !Number.isInteger(Number(e.key)) ||
      [DELETE_KEY_CODE, BACKSPACE_KEY_CODE]
        .includes(e.key));

    console.log('e.target.value ----> ', e.target.value, '\n');

    // e.target.value = cpf;
    // if (e.key === ENTER_KEY_CODE) {
    //   handleOnSearch(e);
    // }
  }

  const handleKeyUp = (e) => {
    // e.preventDefault();
    console.log('e.keyUp: ', e.key);
    console.log('e.codeUp: ', e.code);
    console.log('e.keyCodeUp: ', e.keyCode);
    console.log('e.whichUp: ', e.which);
    console.log('e.target.value ----> ', e.target.value);
    // if (![DELETE_KEY_CODE, BACKSPACE_KEY_CODE].includes(e.key)) {
    //   setCPF(maskCPF(e.target.value));
    // } else {
    //   setCPF(e.target.value);
    // }

    if (!Number.isInteger(Number(e.key)) || [DELETE_KEY_CODE, BACKSPACE_KEY_CODE].includes(e.key)) {
      e.preventDefault();
    }
    console.log('e.target.value ----> ', e.target.value, '\n');

    // e.target.value = cpf;
    // if (e.key === ENTER_KEY_CODE) {
    //   handleOnSearch(e);
    // }
  }

  const handleOnChange = (e) => {
    e.preventDefault();
    console.log('e.target.value ----> ', e.target.value, 'cpf: ', cpf);
    if (preventChange) {
      
      setCPF(e.target.value);
    }
    else {
      setCPF(maskCPF(e.target.value));
    }

    console.log('e.target.value ----> ', e.target.value, 'cpf: ', cpf);

    // e.target.value = cpf;
    // if (e.key === ENTER_KEY_CODE) {
    //   handleOnSearch(e);
    // }
  }

  const handleKeyPress = (e) => {
    console.log('\ne.target.value: ', e.target.value)
    console.log('e.key: ', e.key);
    console.log('e.keyCode: ', e.keyCode, '\n');
    console.log((e.keyCode == 190 || e.keyCode == 194))
    // if (e.key === ENTER_KEY_CODE) {
    //   return onSearch(cpf);
    // }

    if (!Number.isInteger(Number(e.key)) || [DELETE_KEY_CODE, BACKSPACE_KEY_CODE].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyPress={e => handleKeyPress(e)}
        onKeyUp={e => handleKeyUp(e)}
        onKeyDown={e => handleKeyDown(e)}
        value={cpf}
        onChange={e => handleOnChange(e)}
        placeholder="Digite o CPF a pesquisar..."
        maxLength="14"
        autoComplete="off"
        autoFocus />
      {/* <button onClick={onSearch}>&#x1F50D;</button> */}
    </div>
  );
}

// SearchBar.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };

// export default styleable(css)(SearchBar)
export default SearchBar;
