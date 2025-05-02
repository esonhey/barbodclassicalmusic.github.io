import { useEffect, useRef, useState } from "react";
import MusicItem from "./MusicItem.jsx"; // یا اگر از .jsx استفاده می‌کنی، نسخه‌ی ری‌اکتی‌ش

const allTracks = await import("../data/music-recommendations").then(m => m.default);

export default function MusicListLazyLoad() {
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + 10);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  const visibleTracks = allTracks.slice(0, visibleCount);

  return (
    <div className="music-list">
      {visibleTracks.map((track, index) => (
        <MusicItem
          key={index}
          imgSrc={track.imgSrc}
          imgAlt={track.imgAlt}
          headerTitle={track.headerTitle}
          desc={track.desc}
          src={track.src}
          type={track.type}
        />
      ))}
      <div ref={loaderRef} style={{ height: "1px" }}></div>
    </div>
  );
}
