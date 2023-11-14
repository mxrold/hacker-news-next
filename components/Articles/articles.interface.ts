export interface ArticlesInterface {
  exhaustive: {
    nbHits: false;
    typo: false;
  };
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: ArticleDTO[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  query: string;
  serverTimeMS: number;
}

export interface ArticleDTO {
  author: string;
  comment_text: string;
  created_at: string;
  created_at_i: number;
  objectID: string;
  parent_id: number;
  story_id: number | string;
  story_title: string;
  story_url: string;
  updated_at: string;
  _highlightResult: HighlightResult;
}

export interface ArticleNormalized {
  author: string;
  created_at: string;
  story_id: number | string;
  story_title: string;
  story_url: string;
}

interface ProcessingTimingsMS {
  afterFetch: {
    format: {
      highlighting: number;
      total: number;
    };
    merge: { total: number };
    total: number;
  };
  fetch: {
    query: number;
    total: number;
  };
  total: number;
  _request: { roundTrip: number };
}

interface HighlightResult {
  author: {
    matchLevel: string;
    matchedWords: string[];
    value: string;
  };
  comment_text: {
    fullyHighlighted: boolean;
    matchLevel: string;
    matchedWords: string[];
    value: string;
  };
  story_title: {
    matchLevel: string;
    matchedWords: string[];
    value: string;
  };
  story_url: {
    matchLevel: string;
    matchedWords: string[];
    value: string;
  };
  tags: string[];
}
