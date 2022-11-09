export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface UserDataType {
  id: string;
  image: string;
  name: string;
}

export interface DramaType {
  id: number;
  title: string;
  img: string;
  rating: string;
  episode: string;
  summary: string;
  release_info: string;
}

export interface DramaQueryType {
  dramas: DramaType [];
  total:number;
  total_page:number;
}

export interface DramaDetailType {
  id: number;
  title: string;
  img: string;
  rating: string;
  episode: string;
  summary: string;
  release_info: string;
  Series:  SerieType []
  directors: DirectorType []
  writers: WriterType []
  themes: ThemeType []
  Casts: CastType []
}


export interface CastType {
  id: number;
  name: string
}

export interface DirectorType {
  id: number;
  name: string;
}

export interface WriterType {
  id: number;
  name: string
}

export interface ThemeType {
  id: number;
  name: string
}

export interface HeadlineType {
  id: number;
  img:string;
  summary:string;
  topic:string;
  displayName:string;
  dominantColor:string;
  deeplink:string;
  titleId:string;
  createdAt:string;
  updatedAt:string;
}

export interface SerieType {
  id:number
  title:string
  time:string
  img:string
}

export interface DramaFormType {
img: string;
title: string;
summary: string;
episode: string;
rating: string;
release_info: string;
content_agents: string;
release_year: number;
cast_id: number [];
// createdAt: string;
// updatedAt: string;
}


export interface SuggestionType {
  id: number;
  name: string;
}

export interface ResponseData {
  items: DramaType []
  figure: CastType
}
