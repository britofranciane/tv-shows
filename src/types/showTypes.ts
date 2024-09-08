export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: Country | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
      name: string;
    };
  };
}

export interface Network {
  id: number;
  name: string;
  country: Country | null;
  officialSite: string | null;
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country | null;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  runtime: number;
}

export interface ShowDetails {
  id: number;
  name: string;
  premiered: string;
  image?: { medium: string; original: string };
  summary: string;
  genres: string[];
  _embedded: {
    episodes: Episode[];
  };
}
