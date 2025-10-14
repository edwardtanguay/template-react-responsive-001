import { Home } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
      <div className="flex items-center gap-4 mb-6">
        <Home size={32} className="text-slate-800" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Home</h2>
      </div>

      <div className="prose max-w-none">
        <p className="text-slate-600 text-lg leading-relaxed">
          Welcome to the Home section. This is a fully responsive menu system built with React Router that adapts seamlessly
          to all screen sizes. On desktop, the menu items are displayed horizontally in the header.
          On mobile devices, they collapse into a hamburger menu for optimal usability.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-800 mb-2">Feature {num}</h3>
              <p className="text-slate-600 text-sm">
                Explore the features available in the Home section.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
