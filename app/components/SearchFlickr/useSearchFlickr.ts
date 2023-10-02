import { useState } from "react";

import { useForm } from "react-hook-form";

import { getImages } from "app/components/SearchFlickr/service";
import bugFixing from "app/images/bugFixing.svg";
import notFound from "app/images/notFound.svg";
import webSearch from "app/images/webSearch.svg";

export const DEFAULT_FORM_MESSAGE =
  "Enter some text and click search to display images from Flickr.";
export const LOADING_MESSAGE = "Loading Images...";
export const NO_RESULTS_FOUND_MESSAGE =
  "Sorry no results! Try searching for something else.";
export const ERROR_MESSAGE =
  "Please inform the administrator that this feature is broken:";

export function useSearchFlickr() {
  const [formMessage, setFormMessage] = useState(DEFAULT_FORM_MESSAGE);
  const [formImage, setFormImage] = useState(webSearch);
  const [photos, setPhotos] = useState([]);

  const {
    control,
    formState: { isSubmitting },
    handleSubmit: rhfHandleSubmit,
  } = useForm({
    defaultValues: { searchCriteria: "" },
  });

  const handleSubmit = rhfHandleSubmit(async ({ searchCriteria }) => {
    setFormMessage(LOADING_MESSAGE);
    setPhotos([]);

    const response = await getImages(searchCriteria);

    if (typeof response === "string") {
      setFormMessage(`${ERROR_MESSAGE} ${response}.`);
      setFormImage(bugFixing);
    } else {
      setFormMessage(
        response.length ? DEFAULT_FORM_MESSAGE : NO_RESULTS_FOUND_MESSAGE,
      );
      setFormImage(response.length ? webSearch : notFound);
      setPhotos(response);
    }
  });

  return {
    control,
    formImage,
    formMessage,
    handleSubmit,
    isSubmitting,
    photos,
  };
}
