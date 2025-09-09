import { Sidebar } from "../../components";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return ( 
<div className="min-h-screen bg-gray-50/50">
    <Sidebar />
    <div className="p-4 xl:ml-80">
        {children}
    </div>
</div>
  );
}