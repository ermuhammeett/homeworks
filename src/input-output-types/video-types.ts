export const Resolutions = [
  "P144",
  "P240",
  "P360",
  "P480",
  "P720",
  "P1080",
  "P1440",
  "P2160",
];

export type OutputVideoType = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: null;
  createdAt: string;
  publicationDate: string;
  availableResolutions: typeof Resolutions;
};

export type InputVideoType = {
  title: string;
  author: string;
  availableResolutions: typeof Resolutions;
};

export type UpdateVideoType = {
  title: string;
  author: string;
  availableResolutions: typeof Resolutions;
  canBeDownloaded: boolean;
  minAgeRestriction: null;
  publicationDate: string;
};
