import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { getImages } from 'src/components/SearchFlickr/service';
import bugFixing from 'src/images/bugFixing.svg';
import notFound from 'src/images/notFound.svg';
import webSearch from 'src/images/webSearch.svg';

export const DEFAULT_FORM_MESSAGE =
  'Enter some text and click search to display images from Flickr.';
export const DEFAULT_FORM_IMAGE = webSearch;
export const LOADING_MESSAGE = 'Loading Images...';
export const NO_RESULTS_FOUND_MESSAGE = 'Sorry no results! Try searching for something else.';
export const NO_RESULTS_FOUND_IMAGE = notFound;
export const ERROR_MESSAGE = 'Please inform the administrator that this feature is broken:';
export const ERROR_IMAGE = bugFixing;

export function useSearchFlickr() {
  const [formMessage, setFormMessage] = useState(DEFAULT_FORM_MESSAGE);
  const [formImage, setFormImage] = useState(DEFAULT_FORM_IMAGE);
  const [photos, setPhotos] = useState([]);

  const {
    control,
    formState: { isSubmitting },
    handleSubmit: rhfHandleSubmit,
  } = useForm({
    defaultValues: { searchCriteria: '' },
  });

  const handleSubmit = rhfHandleSubmit(async ({ searchCriteria }) => {
    setFormMessage(LOADING_MESSAGE);
    setPhotos([]);

    const response = await getImages(searchCriteria);

    if (typeof response === 'string') {
      setFormMessage(`${ERROR_MESSAGE} ${response}.`);
      setFormImage(ERROR_IMAGE);
    } else {
      setFormMessage(response.length ? DEFAULT_FORM_MESSAGE : NO_RESULTS_FOUND_MESSAGE);
      setFormImage(response.length ? DEFAULT_FORM_IMAGE : NO_RESULTS_FOUND_IMAGE);
      setPhotos(response);
    }
  });

  return { control, formImage, formMessage, handleSubmit, isSubmitting, photos };
}
