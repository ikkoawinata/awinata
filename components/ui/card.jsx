// import { forwardRef } from 'react';
// import { cn } from '@/lib/utils';

// const Card = forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
//     {...props}
//   />
// ));
// Card.displayName = 'Card';

// const CardHeader = forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn('flex flex-col space-y-1.5 p-6', className)}
//     {...props}
//   />
// ));
// CardHeader.displayName = 'CardHeader';

// const CardTitle = forwardRef(({ className, ...props }, ref) => (
//   <h3
//     ref={ref}
//     className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
//     {...props}
//   />
// ));
// CardTitle.displayName = 'CardTitle';

// const CardDescription = forwardRef(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn('text-sm text-muted-foreground', className)}
//     {...props}
//   />
// ));
// CardDescription.displayName = 'CardDescription';

// const CardContent = forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn('p-6 pt-0', className)}
//     {...props}
//   />
// ));
// CardContent.displayName = 'CardContent';

// const CardFooter = forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn('flex items-center p-6 pt-0', className)}
//     {...props}
//   />
// ));
// CardFooter.displayName = 'CardFooter';

// export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };



import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm w-80 h-60 opacity-0 transition-opacity duration-500 ease-in-out",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 p-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
