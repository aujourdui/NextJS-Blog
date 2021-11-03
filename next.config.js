const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "aujourdui",
        mongodb_password: "b50HX3xdE9QF6x4V",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "aujourdui",
      mongodb_password: "b50HX3xdE9QF6x4V",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
