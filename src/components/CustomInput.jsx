import React from 'react'

function CustomInput(props) {
    const {type,name,placeholder,classname}=props
  return (
    <div>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${classname}`}
        />
      </div>
    </div>
  );
}

export default CustomInput