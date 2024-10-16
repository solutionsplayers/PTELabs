const config = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  endPoints: {
    artCollection: 'public/getArtCollection',
    createArt: 'admin/addArt',
  },
};

export { config };
