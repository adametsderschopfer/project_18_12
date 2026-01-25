import { use } from "react";

const fetchSearch = async (query: string) => {
  const res = await fetch(`/api/catalog/search?query=${query}`);
  return await res.json();
};

const SearchPage = ({searchParams}: {searchParams: Promise<{ q: string }>}) => {
  const {q: query = ""} = use(searchParams);
  console.log(query)

  return null
}

export default SearchPage;
