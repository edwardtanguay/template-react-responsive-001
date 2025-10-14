import { Bell } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
      <div className="flex items-center gap-4 mb-6">
        <Bell size={32} className="text-slate-800" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Notifications</h2>
      </div>

      <div className="prose max-w-none">
        <p className="text-slate-600 text-lg leading-relaxed">
          Stay updated with your latest notifications and alerts.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-800 mb-2">Notification {num}</h3>
              <p className="text-slate-600 text-sm">
                Explore the features available in the Notifications section.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
