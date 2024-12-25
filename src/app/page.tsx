import CategoriesList from "@/components/custom/home/CategoriesList";
import PropertiesContainer from "@/components/custom/home/PropertiesContainer";

export default function HomePage({
  searchParams,
}: {
  searchParams: { category: string; search: string };
}) {
  console.log("HomePage", searchParams);

  return (
    <section>
      <CategoriesList
        category={searchParams?.category}
        search={searchParams?.search}
      />
      <PropertiesContainer
        category={searchParams?.category}
        search={searchParams?.search}
      />
    </section>
  );
}
