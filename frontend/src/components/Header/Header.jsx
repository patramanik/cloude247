export default function Header() {
    return (
      <div className="flex justify-between items-center h-16 bg-gray-800 px-4">
        <div className="font-medium text-2xl text-white">Cloude247</div>
        <nav className="flex gap-6">
          <a href="#home" className="text-slate-900 dark:text-white hover:text-">
            Home
          </a>
          <a href="#service" className="text-slate-900 dark:text-white hover:underline">
            Service
          </a>
          <a href="#blog" className="text-slate-900 dark:text-white hover:underline">
            Blog
          </a>
          <a href="#about" className="text-slate-900 dark:text-white hover:underline">
            About
          </a>
        </nav>
      </div>
    );
  }
  