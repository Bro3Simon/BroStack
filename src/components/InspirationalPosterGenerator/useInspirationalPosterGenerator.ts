import { useRef, useState } from 'react';

import { IMAGES } from 'src/data/images';
import { QUOTES } from 'src/data/quotes';

export function useInspirationalPosterGenerator() {
  const [image, setImage] = useState(IMAGES[computeRandomIndex(IMAGES)]);
  const [quote, setQuote] = useState(QUOTES[computeRandomIndex(QUOTES)]);
  const [isFadingIn, setIsFadingIn] = useState(true);

  const isFirstRender = useRef(true);

  function handleClickNewPoster() {
    isFirstRender.current = false;
    setIsFadingIn(false);
  }

  function fadeBackIn() {
    setIsFadingIn(true);
  }

  function buildNewInspirationalPoster() {
    // Prevent setting an image or quote on first render,
    // since it is already set when declaring the state
    if (!isFirstRender.current) {
      let randomImage = IMAGES[computeRandomIndex(IMAGES)];
      let randomQuote = QUOTES[computeRandomIndex(QUOTES)];

      // Make sure the same image isn't used twice in a row
      while (randomImage.source === image.source) {
        randomImage = IMAGES[computeRandomIndex(IMAGES)];
      }

      // Make sure the same quote isn't used twice in a row
      while (randomQuote.author === quote.author) {
        randomQuote = QUOTES[computeRandomIndex(QUOTES)];
      }

      setImage(randomImage);
      setQuote(randomQuote);
    }
  }

  function computeRandomIndex(array: Array<any>) {
    return Math.floor(Math.random() * array.length);
  }

  return {
    buildNewInspirationalPoster,
    fadeBackIn,
    handleClickNewPoster,
    image,
    isFadingIn,
    quote,
  };
}
