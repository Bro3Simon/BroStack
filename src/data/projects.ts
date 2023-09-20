import { ButtonAnimation } from 'src/components/ButtonAnimation';
import { ClientWork } from 'src/components/ClientWork';
import { InspirationalPosterGenerator } from 'src/components/InspirationalPosterGenerator';
import { NumberGuesser } from 'src/components/NumberGuesser';
import { SearchFlickr } from 'src/components/SearchFlickr';
import { Scoreboard } from 'src/features/Scoreboard';

export const PROJECTS = [
  {
    componentName: InspirationalPosterGenerator,
    title: 'Inspirational Poster Generator' as const,
  },
  {
    componentName: NumberGuesser,
    title: 'Number Guesser' as const,
  },
  {
    componentName: ButtonAnimation,
    title: 'Button Animation' as const,
  },
  {
    componentName: SearchFlickr,
    title: 'Search Flickr' as const,
  },
  {
    componentName: Scoreboard,
    title: 'Scoreboard' as const,
  },
  {
    componentName: ClientWork,
    title: 'Client Work' as const,
  },
];
