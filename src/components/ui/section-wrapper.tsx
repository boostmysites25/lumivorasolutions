import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionWrapperVariants = cva(
  "w-full",
  {
    variants: {
      background: {
        default: "bg-background",
        secondary: "bg-background-secondary",
        gradient: "bg-gradient-to-br from-background via-background-secondary to-background",
      },
      padding: {
        sm: "py-12 sm:py-16",
        md: "py-16 sm:py-20 lg:py-24",
        lg: "py-20 sm:py-24 lg:py-32",
      },
    },
    defaultVariants: {
      background: "default",
      padding: "md",
    },
  }
)

export interface SectionWrapperProps
  extends VariantProps<typeof sectionWrapperVariants> {
  as?: React.ElementType
  className?: string
  children?: React.ReactNode
}

const SectionWrapper = React.forwardRef<
  HTMLElement,
  SectionWrapperProps & React.HTMLAttributes<HTMLElement>
>(({ className, background, padding, as: Component = "section", ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(sectionWrapperVariants({ background, padding, className }))}
      {...props}
    />
  )
})
SectionWrapper.displayName = "SectionWrapper"

export { SectionWrapper, sectionWrapperVariants }
