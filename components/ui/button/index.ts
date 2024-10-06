import { type VariantProps, cva } from "class-variance-authority"
import type { ClassValue } from "clsx"
import type { PrimitiveProps } from "radix-vue"
import type { HTMLAttributes } from "vue"

export { default as Button } from "./Button.vue"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 px-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      roundness: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      roundness: "md",
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
export const buttonIconVariants = cva("shrink-0", {
  variants: {
    size: {
      default: "size-5",
      sm: "size-3",
      lg: "size-6",
      icon: "size-5",
      "icon-sm": "size-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface ButtonProps {
  as: PrimitiveProps["as"] | Component | "link"
  asChild: PrimitiveProps["asChild"]
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  roundness?: ButtonVariants["roundness"]
  class?: HTMLAttributes["class"]
  type: "button" | "submit" | "reset"
  linkAs: PrimitiveProps["as"] | Component
  loading: boolean
  disabled: boolean
  label: string
  truncate: boolean
  block: boolean
  loadingIcon: string
  icon: ClassValue
  trailing: boolean
  leading: boolean
  leadingIcon: ClassValue
  leadingIconWrapperClass: ClassValue
  trailingIcon: ClassValue
  trailingIconWrapperClass: ClassValue
  ui: {
    label: ClassValue
  }
}
