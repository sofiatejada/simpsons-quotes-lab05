const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

export const getSimpsonsQuote = async () => {
  const res = await fetch(URL);
  const [quote] = await res.json();
  console.log(quote);
  return ({
    quote: quote.quote,
    character: quote.character,
    image: quote.image,
  });
};
