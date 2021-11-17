module.exports = {
  reactStrictMode: true,
  env: {
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
