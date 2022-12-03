import React, {useState} from 'react';
import {CATEGORIES, Quote, SendingQuote} from "../../types.d";

interface QuoteMutation {
  category: string,
  author: string;
  text: string;
}

interface Props {
  onSubmit: (quote: SendingQuote) => void;
  existingQuote?: Quote | null;
}

const Form: React.FC<Props> = ({onSubmit, existingQuote}) => {
  const initialState = existingQuote ? {...existingQuote} : {category: CATEGORIES[0].id, author: '', text: '',};
  const [quote, setQuote] = useState<QuoteMutation>(initialState);

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setQuote(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({...quote})
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <select name="category" value={quote.category} onChange={onTextFieldChange}>
          {CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>{category.title}</option>
          ))}
        </select>
        <input
          className="d-block mt-2"
          type="text"
          name="author"
          placeholder="Введите заголовок"
          value={quote.author}
          onChange={onTextFieldChange}
        />
        <textarea
          className="d-block mt-2"
          name="text"
          placeholder="Введите сообщение"
          value={quote.text}
          onChange={onTextFieldChange}
        />
        <button type="submit" className="d-block btn btn-primary mt-2">Save</button>
      </form>
    </div>
  );
};

export default Form;