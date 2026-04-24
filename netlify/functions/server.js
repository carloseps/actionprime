import serverBuild from "../../dist/server/server.js";

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
  const response = await serverBuild.fetch(request);

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
