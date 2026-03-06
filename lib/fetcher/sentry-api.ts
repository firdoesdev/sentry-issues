import axios from "axios";

const BASE_URL = process.env.SENTRY_BASE_URL!;

const AUTH_TOKEN = "Bearer " + process.env.SENTRY_AUTH_TOKEN!;

export const sentryFetcher = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});
