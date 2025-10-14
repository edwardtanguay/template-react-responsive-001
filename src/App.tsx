import { useState } from 'react';
import { Menu, X, Home, User, Settings, Mail, FileText, Calendar, ShoppingCart, Heart, Bell, Search } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Home');

  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
    { name: 'Messages', icon: Mail },
    { name: 'Documents', icon: FileText },
    { name: 'Calendar', icon: Calendar },
    { name: 'Shopping', icon: ShoppingCart },
    { name: 'Favorites', icon: Heart },
    { name: 'Notifications', icon: Bell },
    { name: 'Search', icon: Search },
  ];

  const handleMenuItemClick = (itemName: string) => {
    setSelectedItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">MyApp</h1>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleMenuItemClick(item.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedItem === item.name
                        ? 'bg-slate-800 text-white shadow-md'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 pb-4 space-y-1 bg-white border-t border-slate-200">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMenuItemClick(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    selectedItem === item.name
                      ? 'bg-slate-800 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-8 sm:py-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const Icon = menuItems.find(item => item.name === selectedItem)?.icon || Home;
                return <Icon size={32} className="text-slate-800" />;
              })()}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">{selectedItem}</h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed">
                Welcome to the {selectedItem} section. This is a fully responsive menu system that adapts seamlessly
                to all screen sizes. On desktop, the menu items are displayed horizontally in the header.
                On mobile devices, they collapse into a hamburger menu for optimal usability.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-slate-800 mb-2">Feature {num}</h3>
                    <p className="text-slate-600 text-sm">
                      Explore the features available in the {selectedItem} section.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-slate-600 text-sm">
            © 2025 MyApp. A fully responsive menu system.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
