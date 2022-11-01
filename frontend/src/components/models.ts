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

/* eslint-disable camelcase */
export interface DramaType {
  id: number;
  title: string;
  img: string;
  rating: string;
  episode: string;
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
