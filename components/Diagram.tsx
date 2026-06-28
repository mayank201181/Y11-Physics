import type { Diagram as DiagramType } from "@/lib/types";

export function DiagramView({ diagram }: { diagram: DiagramType }) {
  return (
    <figure className="my-3">
      <div className="diagram" dangerouslySetInnerHTML={{ __html: diagram.svg }} />
      {diagram.caption && (
        <figcaption className="text-xs text-[var(--ink-soft)] mt-1.5 text-center">
          {diagram.caption}
        </figcaption>
      )}
    </figure>
  );
}
