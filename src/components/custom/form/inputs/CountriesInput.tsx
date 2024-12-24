import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formattedCountries } from "@/lib/constants/countries";

const name = "country";

function CountriesInput({
  defaultValue = formattedCountries[0].code,
}: {
  defaultValue?: string;
}) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        country
      </Label>

      <Select defaultValue={defaultValue} name={name} required>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((item) => {
            return (
              <SelectItem key={item.code} value={item.code}>
                <span className="flex items-center gap-2">
                  {item.flag} {item.name}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default CountriesInput;
