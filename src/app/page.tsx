import CategoriesList from "@/components/custom/home/CategoriesList";

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
    </section>
  );
}
