import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");

  return <div>PropertyDetailsPage</div>;
}
export default PropertyDetailsPage;
