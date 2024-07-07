import {NYTIMES_KEY} from '@env';

type BuyLink = {
  name: string;
  url: string;
};

type ISBN = {
  isbn10: string;
  isbn13: string;
};

export type Book = {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  asterisk: number;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  buy_links: BuyLink[];
  contributor: string;
  contributor_note: string;
  dagger: number;
  description: string;
  first_chapter_link: string;
  isbns: ISBN[];
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  weeks_on_list: number;
};

const API_STEM = 'https://api.nytimes.com/svc/books/v3/lists';
const LIST_NAME = 'hardcover-fiction';

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${NYTIMES_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.results.books;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
