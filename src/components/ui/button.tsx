import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        filled: "bg-dark-gray text-white hover:bg-[#1C1C1A] focus:outline",
        outlined: "border border-dark-gray hover:border-[#1C1C1A]",
        ghost: "text-dark-gray hover:text-[#1C1C1A]",

        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        small: "h-8 px-3 text-xs",
        medium: "h-10 px-4 text-sm",
        large: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  startIcon,
  endIcon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      disabled={disabled || loading}
      className={cn(
        buttonVariants({ variant, size }),
        loading && "cursor-not-allowed",
        className
      )}
      {...props}
    >
      {/* Start Icon */}
      {startIcon && !loading && (
        <span className="flex items-center">{startIcon}</span>
      )}

      {/* Loading Spinner */}
      {loading && (
        <span className="flex items-center animate-spin">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </span>
      )}

      {/* Label */}
      <span>{children}</span>

      {/* End Icon */}
      {endIcon && !loading && (
        <span className="flex items-center">{endIcon}</span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
