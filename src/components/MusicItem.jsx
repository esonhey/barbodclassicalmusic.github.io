// src/components/MusicItem.jsx
import "../styles/Music-item.css";

export default function MusicItem({ imgSrc, imgAlt, headerTitle, desc, src, type }) {
  return (
    <div className="music-item">
      <img src={imgSrc} alt={imgAlt} loading="lazy" />
      <div className="music-details">
        <h2>{headerTitle}</h2>
        <p>{desc}</p>
        <audio controls>
          <source src={src} type={type} />
          مرورگر شما از پخش فایل صوتی پشتیبانی نمی‌کند.
        </audio>
      </div>
    </div>
  );
}
