import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/mock";

interface Props {
  items?: typeof faqs;
}

export function FAQAccordion({ items = faqs }: Props) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`item-${i}`} className="border-border/70">
          <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
