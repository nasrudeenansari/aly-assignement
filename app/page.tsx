import Gallary from "@/components/Gallery/page";
import Navbar from "@/components/navbar/page";
import axios from "axios";

const fetchData = async (query: string | undefined, page: string = "1") => {
  let apiUrl = `https://simple-pexels-proxy.onrender.com/search?query=${query}&per_page=5&page=${page}`;

  try {
    const { data } = await axios.get(apiUrl);
    console.log(data, "data98909090");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error", error);
    } else {
      console.log("Something went wrong...");
    }
  }
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { query, page } = searchParams;
  let response = await fetchData(query, page);

  return (
    <>
      <Navbar />
      <Gallary response={response} initialQuery={query as string} />
    </>
  );
}
