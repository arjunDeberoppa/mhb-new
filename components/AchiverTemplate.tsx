import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface TestimonyProps {
  imageSrc: string;
  videoSrc: string;
  text: string;
  name: string;
  isActive: boolean;
  onIntersect: (entry: IntersectionObserverEntry, isActive: boolean) => void;
}

const Testimony: React.FC<TestimonyProps> = ({
  imageSrc,
  videoSrc,
  text,
  name,
  isActive,
  onIntersect,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, true);
        } else {
          onIntersect(entry, false);
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [observerCallback]);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className="container max-w-[1440px] mx-auto flex flex-col gap-12 lg:flex-row md:gap-20 md:justify-between items-center"
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          className="md:max-w-[616px] md:max-h-[640px]"
          controls
          preload="true"
        >
          <source src={videoSrc} type="video/mp4" />
          <track src={videoSrc} kind="captions" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          width={616}
          height={700}
          src={imageSrc}
          alt="testimony-image"
          className="xl:w-[616px] xl:h-[700px]"
        />
      )}
      <div className="flex flex-col gap-8">
        <p className="font-bold w-auto md:max-w-lg lg:max-w-[616px] self-center md:text-2xl">
          {text}
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="pr-4">
            <p className="font-bold">{name}</p>
            <p>{/* {position}, {company} */}</p>
          </div>
          {/* <Image
            width={140}
            height={56}
            className="w-[140px] h-[56px]"
            src={webflowSrc}
            alt="webflow"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
