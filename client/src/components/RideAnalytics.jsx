import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RideAnalytics() {
  const data = [
    { month: "Jan", rides: 4 },
    { month: "Feb", rides: 7 },
    { month: "Mar", rides: 5 },
    { month: "Apr", rides: 8 },
    { month: "May", rides: 6 },
  ];

  return (
    <div className="glass p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Ride Analytics</h2>

      {/* give ResponsiveContainer an explicit height to avoid zero/negative size errors */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="rides" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}