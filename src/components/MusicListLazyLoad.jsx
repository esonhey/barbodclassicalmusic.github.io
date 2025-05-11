import { useEffect, useState } from "react";
import musicData from "../data/music-recommendations";




function MusicListLazyLoad() {
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (nearBottom && visibleCount < musicData.length) {
        setVisibleCount((prev) => prev + 5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount]);

  const visibleMusic = musicData.slice(0, visibleCount);

  return (
    <div>
      {visibleMusic.map((item, index) => (
        <div key={index} className="music-item">
          <img src={item.imgSrc} alt={item.imgAlt} loading="lazy" />
          <div className="music-details">
            <h2>{item.headerTitle}</h2>
            <p>{item.desc}</p>
            <audio controls>
              <source src={item.src} type={item.type} />
              مرورگر شما از پخش فایل صوتی پشتیبانی نمی‌کند.
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicListLazyLoad;
