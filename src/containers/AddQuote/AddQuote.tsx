import React, {useState} from 'react';
import Form from "../../components/Form/Form";
import {SendingQuote} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const AddQuote = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const addQuote = async (quote: SendingQuote) => {
    try {
      setLoading(true);
      await axiosApi.post("/quotes.json", quote);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };
  
  let info = (
    <div>
      <h4 className="mt-2 mb-2">Add new post</h4>
      <Form onSubmit={addQuote}/>
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

export default AddQuote;