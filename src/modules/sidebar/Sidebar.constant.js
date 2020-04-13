import { FiSearch } from 'react-icons/fi';
import { AiOutlineBars, AiOutlineHome } from 'react-icons/ai';

export const NavbarItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: AiOutlineHome,
  },
  {
    id: 'search',
    label: 'Search',
    href: '/search',
    icon: FiSearch,
  },
  {
    id: 'library',
    label: 'Your Library',
    href: '/library',
    icon: AiOutlineBars,
  },
];
