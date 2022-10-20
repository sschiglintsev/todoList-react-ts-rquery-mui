import axios from "axios";
import {formatDate} from "../utils/utils";

const API_KEY = '12828b748da8407d83ac6d11e2c794a2';

type Source = {
    id: {},
    name: string,
}

type Article = {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: Source,
    title: string,
    url: string,
    urlToImage: string,
}

type NewsType = {
    articles: Article[]
}

export const NewsService = {
    async getAll() {
        return axios.get<NewsType>(`https://newsapi.org/v2/everything?q=Apple&from=${formatDate()}&sortBy=popularity&apiKey=${API_KEY}`)
    }
};