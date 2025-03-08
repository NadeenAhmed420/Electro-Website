import BestSellers from "./components/BestSellers";
import NewsLetter from "./components/NewsLetter";
import Offers from "./components/Offers";
import Products from "./components/Products";
import RecentlyViewed from "./components/RecentlyViewed";
import Sales from "./components/Sales";
import Sponsers from "./components/Sponsers";
import Category from "./components/Category";
import Deals from "./components/Deals";
export default function Home() {
  return (
    <>
      <Category />
      <Offers />
      <Deals />
      <BestSellers />
      <Sales />
      <RecentlyViewed />
      <Sponsers />
      <Products />
      <NewsLetter />
    </>
  );
}
