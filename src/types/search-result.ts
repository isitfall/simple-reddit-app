export interface BaseSearchItem {
  id: string;
  title: string;
  url: string;
  [ken: string]: unknown;
}

export interface SearchResult {
  kind: string;
  data: BaseSearchItem;
}

export interface ResponseData {
  after?: string;
  before?: string;
  children: SearchResult[];
  dist: number;
  geo_filter?: any;
  modhash?: string;
}

export interface Response {
  kind: string;
  data: ResponseData;
}
