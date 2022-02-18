import { ButtonAnimation } from 'src/components/ButtonAnimation';
import { ClientWork } from 'src/components/ClientWork';
import { InspirationalPosterGenerator } from 'src/components/InspirationalPosterGenerator';
import { NumberGuesser } from 'src/components/NumberGuesser';
import { SearchFlickr } from 'src/components/SearchFlickr';
import { Scoreboard } from 'src/features/Scoreboard';

export const PROJECTS = [
  {
    componentName: InspirationalPosterGenerator,
    title: 'Inspirational Poster Generator',
  },
  {
    componentName: NumberGuesser,
    title: 'Number Guesser',
  },
  {
    componentName: ButtonAnimation,
    title: 'Button Animation',
  },
  {
    componentName: SearchFlickr,
    title: 'Search Flickr',
  },
  {
    componentName: Scoreboard,
    title: 'Scoreboard',
  },
  {
    componentName: ClientWork,
    title: 'Client Work',
  },
];
