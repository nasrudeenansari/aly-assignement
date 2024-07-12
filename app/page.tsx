import FooterPagination from "@/components/FooterPagination/page";
import Gallery from "@/components/Gallery/page";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/navbar/page";
import axios from "axios";

const fetchData = async (query: string | undefined, page: string = "1") => {
  let apiUrl = `https://simple-pexels-proxy.onrender.com/search?query=${query}&per_page=5&page=${page}`;

  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error during fetch data:", error);
    } else {
      console.log("Error during fetch data:", error);
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

  const totalPages =
    Math.ceil(response?.total_results / response?.per_page) || 0;

  return (
    <>
      <Navbar />

      <Gallery
        response={response}
        initialQuery={query as string}
        totalPages={totalPages}
      />

      <FooterPagination
        totalPages={totalPages}
        page={Number(page) || 1}
        query={query as string}
        total_results={response?.total_results}
      />
      <Footer />
    </>
  );
}
