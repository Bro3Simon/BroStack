import { ButtonAnimation } from "app/components/ButtonAnimation";
import { ExternalWork } from "app/components/ExternalWork";
import { InspirationalPosterGenerator } from "app/components/InspirationalPosterGenerator";
import { NumberGuesser } from "app/components/NumberGuesser";
import { SearchFlickr } from "app/components/SearchFlickr";
import { Scoreboard } from "app/features/Scoreboard";

export const PROJECTS = [
  {
    componentName: InspirationalPosterGenerator,
    title: "Inspirational Poster Generator" as const,
  },
  {
    componentName: NumberGuesser,
    title: "Number Guesser" as const,
  },
  {
    componentName: ButtonAnimation,
    title: "Button Animation" as const,
  },
  {
    componentName: SearchFlickr,
    title: "Search Flickr" as const,
  },
  {
    componentName: Scoreboard,
    title: "Scoreboard" as const,
  },
  {
    componentName: ExternalWork,
    title: "External Work" as const,
  },
];
