import { cva, type VariantProps } from 'class-variance-authority';
import { Link, type LinkProps } from 'react-router';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center relative z-10 justify-center gap-1.5 rounded-full font-medium transition-all duration-300 px-5 py-3 overflow-hidden',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-white text-black hover:text-white',
          'after:content-[""] after:absolute after:rounded-full after:inset-0 after:bg-primary after:-translate-x-[105%] after:scale-105 after:transition-all after:duration-300 after:origin-left hover:after:translate-x-0 after:-z-1',
        ],
        secondary: [
          'bg-secondary-100 text-white hover:text-black',
          'after:content-[""] after:absolute after:rounded-full after:inset-0 after:bg-white after:-translate-x-[105%] after:scale-105 after:transition-all after:duration-300 after:origin-left hover:after:translate-x-0 after:-z-1',
        ],
        tertiary: [
          'bg-transparent text-white p-0',
          'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:content-[""] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps extends LinkProps, VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <Link className={cn(buttonVariants({ variant, className }))} {...props} />;
}
