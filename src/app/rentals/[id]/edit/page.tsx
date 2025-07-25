import { SubmitButton } from "@/components/custom/form/buttons/SubmitButton";
import FormContainer from "@/components/custom/form/FormContainer";
import AmenitiesInput from "@/components/custom/form/inputs/AmenitiesInput";
import CategoriesInput from "@/components/custom/form/inputs/CategoriesInput";
import CounterInput from "@/components/custom/form/inputs/CounterInput";
import CountriesInput from "@/components/custom/form/inputs/CountriesInput";
import FormInput from "@/components/custom/form/inputs/FormInput";
import ImageInputContainer from "@/components/custom/form/inputs/ImageInputContainer";
import PriceInput from "@/components/custom/form/inputs/PriceInput";
import TextAreaInput from "@/components/custom/form/inputs/TextAreaInput";
import { Amenity } from "@/lib/constants/amenities";
import {
  fetchRentalDetails,
  updatePropertyImageAction,
  updatePropertyAction,
} from "@/utils/actions";
import { redirect } from "next/navigation";

async function EditRentalPage({ params }: { params: { id: string } }) {
  const property = await fetchRentalDetails(params.id);

  if (!property) redirect("/");

  const defaultAmenities: Amenity[] = JSON.parse(property.amenities);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Edit Property</h1>
      <div className="border p-8 rounded-md ">
        <ImageInputContainer
          name={property.name}
          text="Update Image"
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type="hidden" name="id" value={property.id} />
        </ImageInputContainer>

        <FormContainer action={updatePropertyAction}>
          <input type="hidden" name="id" value={property.id} />
          <div className="grid md:grid-cols-2 gap-8 mb-4 mt-8">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue={property.tagline}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <CountriesInput defaultValue={property.country} />
          </div>

          <TextAreaInput
            name="description"
            labelText="Description (10 - 100 Words)"
            defaultValue={property.description}
          />

          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accommodation Details
          </h3>
          <CounterInput detail="guests" defaultValue={property.guests} />
          <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />
          <CounterInput detail="beds" defaultValue={property.beds} />
          <CounterInput detail="baths" defaultValue={property.baths} />
          <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
          <AmenitiesInput defaultValue={defaultAmenities} />
          <SubmitButton text="edit property" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditRentalPage;
