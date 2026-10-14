import { site } from "@/content/site";

export function Address({ className = "" }: { className?: string }) {
  const { street, city, region, postalCode, country } = site.address;

  return (
    <address className={`not-italic leading-relaxed ${className}`}>
      <span className="block">{street}</span>
      <span className="block">
        {city}, {region} {postalCode}
      </span>
      <span className="block">{country}</span>
    </address>
  );
}
