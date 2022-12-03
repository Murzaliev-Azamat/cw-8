import React from 'react';
import type {Quote} from "../../types";
import QuoteView from "../QuoteView/QuoteView";
import CategoryList from "../CategoryList/CategoryList";

interface Props {
  quotes: Quote[];
  onDelete: (id: string) => void;
}

const QuoteList: React.FC<Props> = ({quotes, onDelete}) => {
  return (
    <div className="row">
      <div className="col-2">
        <CategoryList/>
      </div>
      <div className="col-10">
        {quotes.map((quote) => (
          <QuoteView onDelete={onDelete} key={quote.id} id={quote.id} author={quote.author} text={quote.text}/>
        ))}
      </div>
    </div>
  );
};

export default QuoteList;