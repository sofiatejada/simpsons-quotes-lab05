import React, { useState } from 'react';
import { getSimpsonsQuote } from '../../services/simpsonsAPI';
import Quote from '../../components/quote/Quote';
import Load from '../../components/quote/Load';

// eslint-disable-next-line max-len
const spinner = 'https://media0.giphy.com/media/3y0oCOkdKKRi0/giphy.gif?cid=ecf05e479m2058tsv1ikg39fxeteewubloheka5jxwfv8sab&rid=giphy.gif&ct=g';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    const quote = await getSimpsonsQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <div>
      <Load onClick={handleButtonClick} />
      {
        loading ? 
          <img href={spinner} /> :
          (
            quote && 
            (
              <Quote 
                quote={quote} 
                character={quote.character} 
                image={quote.image} />
            )
          )
      }
    </div>
  );
};

export default SimpsonsQuote;
