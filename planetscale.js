/* eslint-disable import/prefer-default-export */
import connect from "planetscale";

/**
 * Creates a connection to the database.
 * @returns the connection to the database
 * */
export const getConnection = () => {
  const dbConfig = {
    url: process.env.DATABASE_URL,
  };

  return connect(dbConfig);
};