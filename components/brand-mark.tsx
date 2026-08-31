import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-mark" href="/" aria-label="Vaxion home">
      <span className="brand-mark__glyph" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="presentation">
          <path d="M4.5 9.5 16 3l11.5 6.5v13L16 29 4.5 22.5v-13Z" />
          <path d="m10 11 6 3.5 6-3.5M16 14.5V24" />
          <circle cx="16" cy="14.5" r="2.1" />
        </svg>
      </span>
      {!compact && (
        <span className="brand-mark__word">
          vaxion<span className="brand-mark__dot">.</span>
        </span>
      )}
    </Link>
  );
}
