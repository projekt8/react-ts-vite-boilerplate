import { cn } from '@/lib/utils';
import { NavLink as ReactRouterNavLink, type NavLinkProps } from 'react-router';

export const NavLink = ({ to, children, className, ...props }: NavLinkProps) => {
  return (
    <ReactRouterNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          [
            'relative z-10 inline-flex items-center justify-center gap-1.5 font-medium text-white',
            'after:bg-primary after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:content-[""] hover:after:scale-x-70',
          ],
          !isActive && 'opacity-80',
          className
        )
      }
      {...props}
    >
      {children}
    </ReactRouterNavLink>
  );
};
