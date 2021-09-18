import React from 'react';
// eslint-disable-next-line max-len
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json([{ 
          quote: 'Watchu got there', 
          character: 'Knife', 
          image: '123.jpg' }])
      );}
  )
);


describe('SimpsonsQuote component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close);
  afterEach(() => cleanup());
  it('renders a Simpsons quote', () => {
    render(
      <SimpsonsQuote />
    );

    const butt = screen.getByRole('button', { name: 'get a quote button' });
    fireEvent.click(butt);
    return(
      waitFor(() => {
        screen.getByText('Watchu got there - Knife');
      })
    );
  });
});
