import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  text: string;
  author: string;
  id: string;
  onDelete: (id: string) => void;
}

const QuoteView: React.FC<Props> = ({text,author,id, onDelete}) => {

  return (
    <div style={{border: "1px solid black", padding: "10px", marginTop: "10px"}}>
      <p>"{text}"</p>
      <p>--- {author}</p>
      <Link to={'/edit-quote/' + id} className="btn btn-primary me-2">Edit</Link>
      <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default QuoteView;