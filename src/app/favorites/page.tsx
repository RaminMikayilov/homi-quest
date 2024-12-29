import EmptyList from "@/components/custom/home/EmptyList";
import PropertiesList from "@/components/custom/home/PropertiesList";
import { fetchFavorites } from "@/utils/actions";

async function FavoritesPage() {
  const favorites = await fetchFavorites();

  if (favorites.length === 0) {
    return <EmptyList />;
  }

  return (
    <section>
      <h1 className="text-3xl mb-2">Favorites Page</h1>
      <PropertiesList properties={favorites} />
    </section>
  );
}
export default FavoritesPage;
