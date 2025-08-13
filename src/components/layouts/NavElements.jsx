import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ELEMENTS } from '../../constants';

const NavElements = ({ mobile, onItemClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    navigate(path);
    if (onItemClick) onItemClick();
  };

  return (
    <>
      {NAV_ELEMENTS.map((navElement, index) => {
        const isActive = location.pathname === navElement.path;

        return (
          <button
            key={index}
            onClick={() => handleLinkClick(navElement.path)}
            className={`
    relative overflow-hidden px-4 py-2 text-sm lg:text-base font-medium rounded-lg
    text-gray-700 group
    transition-colors duration-300 ease-in-out
    ${isActive ? 'text-white font-semibold' : 'hover:text-white'}
  `}
          >
            {navElement.name}

            <span
              className={`
    absolute top-0 left-1/2 h-full bg-primary
    transition-all duration-300 ease-in-out
    transform -translate-x-1/2 rounded-lg
    ${
      isActive
        ? mobile
          ? 'w-1/3'
          : 'w-full'
        : mobile
          ? 'w-0 group-hover:w-1/3'
          : 'w-0 group-hover:w-full'
    }
    -z-10
  `}
            />
          </button>
        );
      })}
    </>
  );
};

export default NavElements;
