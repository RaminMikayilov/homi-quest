import FavoriteToggleButton from "@/components/custom/card/FavoriteToggleButton";
import BreadCrumb from "@/components/custom/properties/BreadCrumb";
import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");

  return (
    <section>
      <BreadCrumb name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold ">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          {/* share button */}
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
    </section>
  );
}
export default PropertyDetailsPage;
