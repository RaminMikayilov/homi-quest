import { SubmitButton } from "@/components/custom/form/buttons/SubmitButton";
import FormContainer from "@/components/custom/form/FormContainer";
import FormInput from "@/components/custom/form/FormInput";

export default function CreateProfilePage() {
  return (
    <FormContainer>
      <FormInput name="firstName" type="text" />
      <SubmitButton />
    </FormContainer>
  );
}
