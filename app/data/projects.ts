import { ButtonAnimation } from "app/components/ButtonAnimation";
import { ExternalWork } from "app/components/ExternalWork";
import { InspirationalPosterGenerator } from "app/components/InspirationalPosterGenerator";
import { NumberGuesser } from "app/components/NumberGuesser";
import { SearchFlickr } from "app/components/SearchFlickr";
import { Scoreboard } from "app/features/Scoreboard";

export const PROJECTS = [
  {
    Component: InspirationalPosterGenerator,
    title: "Inspirational Poster Generator",
  },
  {
    Component: NumberGuesser,
    title: "Number Guesser",
  },
  {
    Component: ButtonAnimation,
    title: "Button Animation",
  },
  {
    Component: SearchFlickr,
    title: "Search Flickr",
  },
  {
    Component: Scoreboard,
    title: "Scoreboard",
  },
  {
    Component: ExternalWork,
    title: "External Work",
  },
] as const;
