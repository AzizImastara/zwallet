module.exports = {
  reactStrictMode: true,
  env: {
    // URL_BACKEND_LOCAL: "http://localhost:3001",
    URL_BACKEND_LOCAL: "https://zwalet.herokuapp.com",
    URL_BACKEND: "https://jsonplaceholder.typicode.com/ ",
  },
  async rewrites() {
    return [
      {
        source: "/profile",
        destination: "/main/profile",
      },
    ];
  },
};
