import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {Quote, SendingQuote} from "../../types";
import Form from "../../components/Form/Form";
import Spinner from "../../components/Spinner/Spinner";

const EditQuote = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOneQuote = useCallback(async () => {
    try {
      setLoading(true);
      const quoteResponse = await axiosApi.get<Quote>('/quotes/' + id + '.json');
      setQuote(quoteResponse.data);
    } finally {
      setLoading(false);
    }
  },[id])

  useEffect(() => {
    fetchOneQuote().catch(console.error);
  },[fetchOneQuote]);

  const updateQuote = async (quote: SendingQuote) => {
    setLoading(true);

    try {
      setLoading(true);
      await axiosApi.put("/quotes/" + id + '.json', quote);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  let info = (
    <div>
      {quote && (<Form existingQuote={quote} onSubmit={updateQuote}/>)}
    </div>
  );

  if (loading) {
    info = <Spinner/>
  }

  return (
    <>
      {info}
    </>
  );
};

export default EditQuote;