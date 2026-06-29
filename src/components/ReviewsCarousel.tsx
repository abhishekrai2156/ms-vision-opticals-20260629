import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard, { ReviewProps } from "./ReviewCard";
import { Button } from "@/components/ui/button";

interface ReviewsCarouselProps {
  reviews: ReviewProps[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {reviews.map((review, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <div className="h-full py-4">
                <ReviewCard {...review} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          aria-label="Previous reviews"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          aria-label="Next reviews"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
}
