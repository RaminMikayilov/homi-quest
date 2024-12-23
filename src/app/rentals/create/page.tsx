import { SubmitButton } from "@/components/custom/form/buttons/SubmitButton";
import CategoriesInput from "@/components/custom/form/inputs/CategoriesInput";
import FormContainer from "@/components/custom/form/FormContainer";
import FormInput from "@/components/custom/form/inputs/FormInput";
import PriceInput from "@/components/custom/form/inputs/PriceInput";
import { createPropertyAction } from "@/utils/actions";
import TextAreaInput from "@/components/custom/form/inputs/TextareaInput";

function CreateProperty() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10 - 1000 Words)"
          />
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProperty;
