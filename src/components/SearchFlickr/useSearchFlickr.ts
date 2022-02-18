import { useState } from 'react';
import { useForm } from 'react-hook-form';

import bugFixing from 'src/images/bugFixing.svg';
import notFound from 'src/images/notFound.svg';
import webSearch from 'src/images/webSearch.svg';

type FlickrPhoto = { id: string; secret: string; server: string; title: string };

const DEFAULT_FORM_MESSAGE = 'Enter some text and click search to display images from Flickr.';
const DEFAULT_FORM_IMAGE = webSearch;

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
    mode: 'onChange',
  });

  const handleSubmit = rhfHandleSubmit(async ({ searchCriteria }) => {
    setFormMessage('Loading Images...');
    setPhotos([]);

    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b80455bd18a1449116a3516a7859a645&text=${searchCriteria}&safe_search=1&content_type=1&per_page=12&page=1&format=json&nojsoncallback=1`,
    )
      .then((response) =>
        response.json().then((response) => {
          if (response.stat === 'fail') return response.message;

          const {
            photos: { photo: photos },
          } = response;
          const sizeSuffix = 'q';

          //   Mutate the data to the format I want
          return photos.map(({ id, secret, server, title }: FlickrPhoto) => {
            return {
              title,
              url: `https://live.staticflickr.com/${server}/${id}_${secret}_${sizeSuffix}.jpg`,
            };
          });
        }),
      )
      .catch(({ message }) => message);

    if (typeof response === 'string') {
      setFormMessage(`Please inform the administrator that this feature is broken: ${response}.`);
      setFormImage(bugFixing);
    } else {
      setFormMessage(
        response.length
          ? DEFAULT_FORM_MESSAGE
          : 'Sorry no results! Try searching for something else.',
      );
      setFormImage(response.length ? DEFAULT_FORM_IMAGE : notFound);
      setPhotos(response);
    }
  });

  return { control, formImage, formMessage, handleSubmit, isSubmitting, photos };
}
