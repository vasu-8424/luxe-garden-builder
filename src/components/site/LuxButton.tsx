import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const variantClass: Record<Variant, string> = {
  solid: "btn-solid",
  outline: "btn-outline-dark",
  ghost: "btn-ghost-light",
};

function Arrow() {
  return (
    <svg
      className="btn-arrow"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 5h14M10 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function LuxLink({
  to,
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "to" | "children">) {
  return (
    <Link
      to={to}
      className={`btn-lux ${variantClass[variant]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function LuxAnchor({
  href,
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ComponentProps<"a">) {
  return (
    <a
      href={href}
      className={`btn-lux ${variantClass[variant]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

export function LuxButton({
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ComponentProps<"button">) {
  return (
    <button className={`btn-lux ${variantClass[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <Arrow />
    </button>
  );
}
