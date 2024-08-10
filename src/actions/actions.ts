"use server";

export const fetchTblData = async (payload: {
  page: number;
  limit: number;
}) => {
  const data = await fetch("http://localhost:3000/api", {
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify(payload),
  });

  return await data.json();
};

export const fetchDog = async () => {
  const data = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });

  return await data.json();
};
