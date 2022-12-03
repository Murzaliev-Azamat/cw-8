export const CATEGORIES: Category[] = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous people', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humour', id: 'humour'},
  {title: 'Motivational', id: 'motivational'},
]

export interface Quote {
  id: string;
  author: string;
  category: string;
  text: string;
}

export interface SendingQuote {
  author: string;
  category: string;
  text: string;
}

export interface QuoteListType {
  [id: string]: Quote;
}

export interface Category {
  title: string;
  id: string;
}
