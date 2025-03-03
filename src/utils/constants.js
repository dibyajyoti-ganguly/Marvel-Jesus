import md5 from "md5";

const publicKey = process.env.REACT_APP_API_KEY_ONE;

const privateKey = process.env.REACT_APP_API_KEY_TWO;

const apiBaseURL = "https://gateway.marvel.com/v1/public";

const ts = Date.now();

const hash = md5(ts + privateKey + publicKey);

const params1 = new URLSearchParams({
  ts: ts,
  limit: 56,
  apikey: publicKey,
  hash: hash,
});

const params2 = new URLSearchParams({
  ts: ts,
  limit: 54,
  apikey: publicKey,
  hash: hash,
});

export { publicKey, privateKey, apiBaseURL, params1, params2 };
