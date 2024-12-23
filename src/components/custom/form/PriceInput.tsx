import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Prisma } from "@prisma/client";

const name = Prisma.PropertyScalarFieldEnum.price;
// const name = 'price';
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue = 100 }: FormInputNumberProps) {
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
export default PriceInput;
