import axios from 'axios';
import { IPostWithAd, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.22.77.64:8080',
});

// todo (6) api 작성

export const getPostList = () => {
  return instance.get('/posts');
};

export const createPost = () => {
  return null;
};

export const getPostById = () => {
  return null;
};

export const updatePostById = () => {
  return null;
};

export const deletePostById = () => {
  return null;
};
