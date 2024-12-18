import { SubmitButton } from "@/components/custom/form/buttons/SubmitButton";
import FormContainer from "@/components/custom/form/FormContainer";
import FormInput from "@/components/custom/form/FormInput";
import { createProfileAction } from "@/utils/actions";

export default function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize"> new user</h1>
      <div className="border p-8 rounded-md ">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
