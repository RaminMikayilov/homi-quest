import { fetchProperties } from "@/utils/actions";
import PropertiesList from "./PropertiesList";
import type { PropertyCardProps } from "@/utils/types";
import EmptyList from "./EmptyList";

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No properties found."
        message="Try adjusting your search criteria or explore other categories."
        btnText="Clear Filters"
      />
    );
  }

  return <PropertiesList properties={properties} />;
}
export default PropertiesContainer;
