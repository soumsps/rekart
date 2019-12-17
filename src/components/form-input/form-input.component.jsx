import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer className='group'>
      <FormInputContainer
        className='form-input'
        onChange={handleChange}
        {...otherProps}></FormInputContainer>
      {label ? (
        <FormInputLabel
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
