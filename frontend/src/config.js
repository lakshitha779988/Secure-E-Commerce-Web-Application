const config = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  REACT_APP_AUTH0_DOMAIN:import.meta.env.REACT_APP_AUTH0_DOMAIN || "dev-jbknh2mwlfpjcfsd.us.auth0.com",
  REACT_APP_AUTH0_CLIENT_ID:import.meta.env.REACT_APP_AUTH0_CLIENT_ID || "rbiWrEk3jaS43u6YFyyZ5H65eVaDsF6h",
  REACT_APP_AUTH0_AUDIENCE:import.meta.env.REACT_APP_AUTH0_AUDIENCE || "http://localhost:5000/api",
};

export default config;
