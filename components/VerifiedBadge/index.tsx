// A 12-lobe scalloped seal with a checkmark knocked out in white.
// The geometry is generated rather than lifted from any platform's asset.
const SEAL =
  "M12.00 1.60A3.34 3.34 0 0 1 17.20 2.99A3.34 3.34 0 0 1 21.01 6.80A3.34 3.34 0 0 1 22.40 12.00A3.34 3.34 0 0 1 21.01 17.20A3.34 3.34 0 0 1 17.20 21.01A3.34 3.34 0 0 1 12.00 22.40A3.34 3.34 0 0 1 6.80 21.01A3.34 3.34 0 0 1 2.99 17.20A3.34 3.34 0 0 1 1.60 12.00A3.34 3.34 0 0 1 2.99 6.80A3.34 3.34 0 0 1 6.80 2.99A3.34 3.34 0 0 1 12.00 1.60Z";

const CHECK =
  "M10.62 15.53 7.4 12.3l1.42-1.42 1.8 1.8 4.55-4.55 1.42 1.42z";

export const VerifiedBadge = ({
  size = 17,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-label="Verified"
    className={className}
  >
    <path d={SEAL} fill="#1d9bf0" />
    {/* Knocked out with the page background so it works in both themes. */}
    <path d={CHECK} className="fill-background" />
  </svg>
);
