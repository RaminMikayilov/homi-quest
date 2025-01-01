import FavoriteToggleButton from "@/components/custom/card/FavoriteToggleButton";
import PropertyRating from "@/components/custom/card/PropertyRating";
import BreadCrumb from "@/components/custom/properties/BreadCrumb";
import ImageContainer from "@/components/custom/properties/ImageContainer";
import ShareButton from "@/components/custom/properties/ShareButton";
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
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer image={property.image} name={property.name} />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex gap-x-4 items-center">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          {/* calendar */}
        </div>
      </section>
    </section>
  );
}
export default PropertyDetailsPage;
