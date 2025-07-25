import ChartsContainer from "@/components/custom/admin/ChartsContainer";
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from "@/components/custom/admin/Loading";
import StatsContainer from "@/components/custom/admin/StatsContainer";
import { Suspense } from "react";

async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
}
export default AdminPage;
