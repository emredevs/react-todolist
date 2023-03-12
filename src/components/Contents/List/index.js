import React from "react";

export default function List({ saveNote, onRemoveTodo }) {
  return (
    <div className="list-box">
      <p>Total List:({saveNote.length})</p>
      <ul className="list">
        {saveNote.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onRemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
