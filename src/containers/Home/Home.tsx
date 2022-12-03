import React, {useCallback, useEffect, useState} from 'react';
import {Quote, QuoteListType} from "../../types";
import axiosApi from "../../axiosApi";
import QuoteList from "../../components/QuoteList/QuoteList";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);

    const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      const quotesResponse = await axiosApi.get<QuoteListType>('/quotes.json');
      if (quotesResponse.data === null) {
        setLoading(false);
        setQuotes([]);
        return;
      }
      const quotes = Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote;
      })
      setQuotes(quotes);
    } finally {
      setLoading(false);
    }
  },[])

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
    <QuoteList onDelete={remove} quotes={quotes}/>
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

export default Home;