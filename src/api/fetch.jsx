import { useState } from "react";
import { getSession, isLoggedIn } from "./session";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useFQuery = (endpoint, key = [], options = {}) => {
  const {
    isPending,
    isSuccess,
    isError,
    data: queryResult,
  } = useQuery({
    queryFn: async () => fetchData(endpoint),
    queryKey: [endpoint, ...key],

    ...options,
  });

  return [queryResult?.data, isPending, isSuccess, isError];
};

export const useFMutation = (endpoint, method, options = {}) => {
  const [resultObject, setResultObject] = useState(null);

  const mutationFn = useMutation({
    mutationFn: (variables) => fetchData(endpoint, method, variables),
    onSettled: (data) => {
      console.log(data);
      setResultObject(data);
    },
    ...options,
  });

  const callFunction = (variables) => {
    return mutationFn.mutate(variables);
  };

  return [callFunction, mutationFn.status];
};

export const newDataFetcher = async (
  path,
  method = "GET",
  headers = {},
  body = null
) => {
  let data = {};
  let error = null;
  let loading = false;
  const baseUrl = `http://localhost:3003/${path}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${isLoggedIn() ? `Bearer ${getSession()?.token}` : ""}`,
      ...headers,
    },
    ...body,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  await fetch(baseUrl, options)
    .then(async (r) => {
      if (!r.ok) {
        error = r.error;
        return;
      }
      await r.json().then((r) => {
        data = r;
      });
    })
    .catch((e) => {
      error = e.message;
    });

  return { data, error };
};

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
  const baseUrl = `http://localhost:3003/${path}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${isLoggedIn() ? `Bearer ${getSession()?.token}` : ""}`,
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    await fetch(baseUrl, options).then(async (response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
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
  return { data, error, loading };
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
