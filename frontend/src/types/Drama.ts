/* eslint-disable camelcase */
export default interface Drama {
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
