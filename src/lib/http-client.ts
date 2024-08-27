const serverUrl = process.env.NEXT_PUBLIC_API_URL!;
export function fetchApi(
  route: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: Record<string, any>,
) {
  const options: RequestInit = {
    method: method,
    cache: "no-store",
  };

  const myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Content-Type", "application/json");

  options.headers = myHeaders;

  if (body) {
    const bodyString = JSON.stringify(body);
    options.body = bodyString;
  }

  return fetch(`${serverUrl}/${route}`, options);
}

export function authFetchApi(
  route: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: Record<string, any>,
) {
  const bearerToken = localStorage.getItem("bearer");
  const options: RequestInit = {
    method: method,
    headers: {
      Authorization: `bearer ${bearerToken}`,
      "Access-Control-Allow-Origin": "*",
    },
    cache: "no-store",
  };

  if (body) {
    const bodyString = JSON.stringify(body);
    options.body = bodyString;
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }
  return fetch(`${serverUrl}/${route}`, options);
}

export function storeToken(token: string) {
  localStorage.setItem("bearer", token);
}

export function remvoeToken() {
  localStorage.removeItem("bearer");
}
