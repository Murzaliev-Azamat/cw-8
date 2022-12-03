import React, {useCallback, useEffect, useState} from 'react';
import QuoteList from "../../components/QuoteList/QuoteList";
import {Quote, QuoteListType} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import {useParams} from "react-router-dom";

const Quotes = () => {
  const {category} = useParams();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  //
  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      const quotesResponse = await axiosApi.get<QuoteListType>(`/quotes.json?orderBy="category"&equalTo="${category}"`);
      const quotes = Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote;
      })
      setQuotes(quotes);
    } finally {
      setLoading(false);
    }
  },[category]);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  const remove = async (id: string) => {
    try {
      setLoading(true);
      await axiosApi.delete('/quotes/' + id + '.json');
      await fetchQuotes();
    } finally {
      setLoading(false);
    }
  }

  let list = (
    <QuoteList quotes={quotes} onDelete={remove}/>
  );

  if (loading) {
    list = <Spinner/>
  }

  return (
    <>
      {list}
    </>
  );
};

export default Quotes;