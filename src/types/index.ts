export interface Video {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  url: string;
  publishedAt?: string;
}

export interface Writing {
  title: string;
  url: string;
  site?: string;
}

export interface Speaking {
  title: string;
  url: string;
}

export interface OpenSource {
  name: string;
  url: string;
  description: string;
  stars: number;
  forks: number;
  issues?: number;
  language: string;
  updatedAt?: string;
  topics?: string[];
}

export interface Company {
  name: string;
  url: string;
  icon: string;
  role: string;
  period: string;
}

export interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
}