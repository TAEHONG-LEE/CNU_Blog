import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import PostListItem from '../components/PostListItem';
import { IResponsePostList } from '../api/types';
import NoPostList from '../components/NoPostList';

const Home = () => {
  const [postList, setPostList] = useState<IResponsePostList>([]);

  const fetchAPostList = async () => {
    const { data } = await getPostList();
    setPostList(data);
  };
  useEffect(() => {
    fetchAPostList();
  }, []);

  if (postList.length === 0) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(item => (
        <PostListItem key={item.post.id} {...item.post} />
      ))}
    </div>
  );
};

export default Home;
