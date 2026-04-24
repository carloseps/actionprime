import * as serverModule from "../../dist/server/server.js";

const serverBuild = serverModule.default ?? serverModule;
const fetchFn = typeof serverBuild.fetch === "function"
  ? serverBuild.fetch.bind(serverBuild)
  : typeof serverBuild.default?.fetch === "function"
    ? serverBuild.default.fetch.bind(serverBuild.default)
    : undefined;

if (!fetchFn) {
  throw new Error("Netlify server function could not locate a valid fetch handler in the server bundle.");
}

function buildUrl(event) {
  const host = event.headers?.host || "localhost";
  const protocol = host.includes("localhost") || host.startsWith("127.") ? "http" : "https";
  const query = event.queryStringParameters ? new URLSearchParams(event.queryStringParameters).toString() : "";
  const path = event.rawUrl && event.rawUrl.startsWith("http") ? event.rawUrl : `${protocol}://${host}${event.path}${query ? `?${query}` : ""}`;
  return new URL(path);
}

function buildRequest(event) {
  const url = buildUrl(event);
  const body = event.body
    ? event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : event.body
    : undefined;

  return new Request(url.toString(), {
    method: event.httpMethod,
    headers: event.headers,
    body,
  });
}

export const handler = async (event) => {
  const request = buildRequest(event);
  const response = await fetchFn(request);

  const headers = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const bodyBuffer = await response.arrayBuffer();
  return {
    statusCode: response.status,
    headers,
    body: Buffer.from(bodyBuffer).toString("base64"),
    isBase64Encoded: true,
  };
};
