import LoadingCards from "@/components/custom/card/LoadingCards";
import CategoriesList from "@/components/custom/home/CategoriesList";
import PropertiesContainer from "@/components/custom/home/PropertiesContainer";
import { Suspense } from "react";

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
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams?.category}
          search={searchParams?.search}
        />
      </Suspense>
    </section>
  );
}
