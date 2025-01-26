import { fetchStats } from "@/utils/actions";
import StatsCard from "./StatsCard";

async function StatsContainer() {
  const stats = await fetchStats();

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCard title="users" value={stats?.usersCount || 0} />
      <StatsCard title="properties" value={stats?.propertiesCount || 0} />
      <StatsCard title="bookings" value={stats?.bookingsCount || 0} />
    </div>
  );
}
export default StatsContainer;
