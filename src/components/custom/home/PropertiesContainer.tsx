import { fetchProperties } from "@/utils/actions";
import PropertiesList from "./PropertiesList";
import type { PropertyCardProps } from "@/utils/types";

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

  return <PropertiesList properties={properties} />;
}
export default PropertiesContainer;
