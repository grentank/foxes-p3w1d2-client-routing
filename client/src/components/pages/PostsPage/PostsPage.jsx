import React from 'react';
import { PostContextProvider } from '../../../contexts/PostContext';
import MyForm from '../../ui/MyForm';
import PostList from '../../ui/PostList';

export default function PostsPage() {
  return (
    // <PostContextProvider>
    <>
      <MyForm />
      <PostList />
    </>
  // </PostContextProvider>
  );
}
