import React from 'react'

function RadioButton({ label, value, onChange, checked }) {
    return (
        <input label={label} type="radio" id={label} onChange={onChange} name={label}  value={value}checked={checked} />
    )
}

export default RadioButton
