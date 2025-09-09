'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    icon: React.ReactNode;
    title: string;
}
export const SidebarMenuItem = ({ path, icon, title} : Props) => {
  const currentPath = usePathname();

  return (
    <li>
        <Link aria-current="page" className="active" href={ path }>
            <button
            className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg w-full flex items-center gap-4 px-4 capitalize 
                ${
              currentPath === path
                ? "bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40"
                : "text-white/80 hover:text-white hover:bg-white/10 active:bg-white/30"
            }`}
            type="button"
            >
            { icon }
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                { title }
            </p>
            </button>
        </Link>
    </li>
  )
}