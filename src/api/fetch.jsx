import { getSession } from "./session";

export const fetchData = async (
  path,
  method = "GET",
  body = null,
  headers = {}
) => {
  let data = {};
  let error = null;
  let loading = false;
  // setLoading(true);
  const baseUrl = `http://localhost:3000/${path}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    await fetch(baseUrl, options).then(async (response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error(`Error: ${response.status.message}`);
      }
      await response.json().then((r) => {
        data = r;
        //   setData(data);
      });
    });
  } catch (e) {
    error = e?.message;
    console.log(e);
  }

  //   .catch((err) => {

  //     // setError(err.message);
  //   })
  //   .finally(() => {
  //     // setLoading(false);
  //   });

  return { ...data, error, loading };
};

export async function login({ email, password }) {
  const options = {
    user: {
      email: email,
      password: password,
    },
  };

  return await fetchData("/login", "POST", options);
}

export async function signup({ name, email, password }) {
  const options = {
    user: {
      name: name,
      email: email,
      password: password,
    },
  };

  return await fetchData("/signup", "POST", options);
}

export async function logout() {
  const headers = {
    Authorization: `Bearer ${getSession()?.token}`,
  };

  return await fetchData("/logout", "DELETE", null, headers);
}

// export default useFetch;
