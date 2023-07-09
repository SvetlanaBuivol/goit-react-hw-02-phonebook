import React from "react";

const Filter = ({value, onChange}) => (
    <input
        value={value}
        type="text"
        placeholder="Search for names..."
        pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]*)*$"
        name="search"
        onChange={onChange}
    />
)

export default Filter;