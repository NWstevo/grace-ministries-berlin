import Image from "next/image";
import type { Ministry } from "@/lib/site";
import { ButtonLink } from "./ui";

const tones = {
  gold: { card: "bg-gradient-to-b from-[#ecc98c] to-[#d9a85e] text-navy-900", sub: "text-navy-900/80", btn: "bronze" },
  royal: { card: "bg-gradient-to-b from-royal to-royal-dark text-white", sub: "text-white/85", btn: "gold" },
  forest: { card: "bg-gradient-to-b from-forest-light to-forest text-white", sub: "text-white/85", btn: "gold" },
  cream: { card: "bg-gradient-to-b from-cream-100 to-cream-300 text-navy-900", sub: "text-navy-900/80", btn: "bronze" },
} as const;

export function MinistryCard({ ministry }: { ministry: Ministry }) {
  const t = tones[ministry.tone];
  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-lg shadow-md ${t.card}`}>
      <Image
        src={ministry.image}
        alt=""
        width={156}
        height={104}
        sizes="(min-width: 640px) 368px, 304px"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col items-center px-6 pt-5 pb-6 text-center">
        <h3 className="font-caps text-xl leading-tight font-semibold uppercase">{ministry.name}</h3>
        <p className="mt-1 font-display text-xl leading-snug font-semibold">{ministry.kind}</p>
        <p className={`mt-3 mb-5 text-sm leading-relaxed ${t.sub}`}>{ministry.text}</p>
        <ButtonLink href={`/ministries/${ministry.slug}`} variant={t.btn} size="sm" className="mt-auto">
          Learn More
        </ButtonLink>
      </div>
    </article>
  );
}
