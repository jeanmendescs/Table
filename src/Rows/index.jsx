import React from "react";

export const Columns = (users) => {
  return users.map((student) => {
    const { id, name, country, email } = student;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{country}</td>
        <td>{email}</td>
      </tr>
    );
  });
};
