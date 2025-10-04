import React from 'react';

// The interface must match the folder names
interface SinglePostPageProps {
  params: {
    username: string;
    postId: string; // Corresponds to the [postid] folder
  };
}

// The component receives all params from the URL based on the file path
const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  // This destructuring will now work correctly
  const { username, postId } = params;

  console.log(`Fetching post ${postId} for user ${username}`);

  // You can now use both username and postid to fetch data or display
  return (
    <div>
      <h1>Showing results for user: {username}</h1>
      <p>Details for post: {postId}</p>
    </div>
  );
};

export default SinglePostPage;