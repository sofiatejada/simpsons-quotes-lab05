import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';

describe('SimpsonsQuote component', () => {
  afterEach(() => cleanup());
  it('renders a Simpsons quote', () => {
    render(
      <SimpsonsQuote />
    );

    const quote = screen.getByAltText();
  });
});
