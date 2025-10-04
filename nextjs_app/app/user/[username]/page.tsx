import React from 'react';

const SingleProfiles = async ({ 
  params 
}: { 
  params: { username: string } 
}) => {
  
  console.log(params.username);

  return <div>User Name = {params.username}</div>;
};

export default SingleProfiles;