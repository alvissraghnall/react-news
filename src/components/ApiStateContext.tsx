import { createContext, PropsWithChildren, Dispatch, useEffect, useState, SetStateAction } from 'react'
import { getArticles, getSources } from '../services';

export type ApiSourcesResponseObject = {
  name: string,
  id: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string
}

interface ApiArticlesResponseObject extends Pick<ApiSourcesResponseObject, "description" | "url"> {
  author: string;
  content: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  source: Pick<ApiSourcesResponseObject, "id" | "name">;
}

/**
 * {
	"0": {
		"id": "abc-news",
		"name": "ABC News",
		"description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
		"url": "https://abcnews.go.com",
		"category": "general",
		"language": "en",
		"country": "us"
	}
}
 */

type Ctx = {
  state: never[][] | (ApiSourcesResponseObject & ApiArticlesResponseObject)[][],
  setters: Dispatch<SetStateAction<never[]>>[]
}

/**
 * API State Context from News API. Uses React's built-in context API
 * to transfer state across multiple components.
 */
export const ApiStateContext = createContext<Ctx>({ state: [], setters: []});

export const ApiStateProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [articles, setArticles ] = useState([]);
  const [sources, setSources ] = useState([]);

  useEffect(() => {
    const initArticles = async () => {
        const res = await getArticles();
        setArticles(res.articles);
    }
    initArticles();

  }, []);

  useEffect(() => {
    const initSources = async () => {
        const res = await getSources();
        setSources(res.sources);
    }
    initSources();
  }, []);

  return (
    <ApiStateContext.Provider value={{state: [articles, sources], setters: [setArticles, setSources]}}>
      {children}
    </ApiStateContext.Provider>
  )

}