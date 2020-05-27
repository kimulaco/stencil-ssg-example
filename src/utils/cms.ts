export const getPostList = async () => {
  const response = await fetch(`${process.env.CMS_BASE_URL}/api/v1/post`, {
    headers: {
      'X-API-KEY': process.env.CMS_API_KEY,
    },
  });
  const json = await response.json()
  return json.contents;
};

export const getPost = async (postId: string) => {
  const response = await fetch(
    `${process.env.CMS_BASE_URL}/api/v1/post/${postId}`,
    {
      headers: {
        'X-API-KEY': process.env.CMS_API_KEY,
      },
    }
  );
  const json = await response.json()
  return json;
};
