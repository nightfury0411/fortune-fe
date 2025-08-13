import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ELEMENTS } from '../../constants';

const NavElements = ({ mobile = false, onItemClick }) => {
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
              relative transition-all duration-300 ease-in-out group
              ${
                mobile
                  ? `w-full text-left px-4 py-3 rounded-lg text-base font-medium
                   ${
                     isActive
                       ? 'bg-blue-50 text-primary border-l-4 border-primary'
                       : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                   }`
                  : `px-4 py-2 text-sm lg:text-base font-medium hover:text-primary
                   ${
                     isActive
                       ? 'text-primary'
                       : 'text-gray-700 hover:text-primary'
                   }`
              }
            `}
          >
            {navElement.name}

            {!mobile && (
              <>
                <span
                  className={`
                    absolute bottom-0 left-1/2 h-0.5 bg-primary
                    transition-all duration-300 ease-in-out transform -translate-x-1/2
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
                <span className="absolute inset-0 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
              </>
            )}
          </button>
        );
      })}
    </>
  );
};

export default NavElements;
