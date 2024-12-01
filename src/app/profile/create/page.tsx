import { SubmitButton } from "@/components/custom/form/buttons/SubmitButton";
import FormInput from "@/components/custom/form/FormInput";

export default function CreateProfilePage() {
  return (
    <>
      <FormInput name="firstName" type="text" />
      <SubmitButton />
    </>
  );
}
