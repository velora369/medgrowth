import { useRef, useState } from "react";
import { testimonials } from "@/lib/landing-data";
import { Play } from "lucide-react";
import { Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

function StoryVideo({ src, name }: { src: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const playWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.currentTime = 0;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      video.muted = true;
      await video.play();
      setPlaying(true);
    }
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void playWithSound();
      return;
    }

    video.pause();
    setPlaying(false);
  };

  return (
    <div className="mg-story-video">
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        muted
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onClick={togglePlayback}
        aria-label={`Depoimento de ${name}`}
      />

      {!playing && (
        <button
          type="button"
          className="mg-story-play"
          onClick={() => void playWithSound()}
          aria-label={`Assistir depoimento de ${name} com som`}
        >
          <span className="mg-story-play-icon">
            <Play size={24} fill="currentColor" />
          </span>
          <span className="mg-story-play-label">Assistir depoimento</span>
        </button>
      )}
    </div>
  );
}

export default function LandingTestimonials() {
  return (
    <SectionContainer id="depoimentos" dark>
      <Reveal>
        <SectionTitle>Quem viveu o processo explica melhor do que a gente.</SectionTitle>
        <SectionLead className="mg-on-dark">
          Depoimentos em vídeo de clientes que passaram pela metodologia Med Growth.
        </SectionLead>
      </Reveal>

      <div className="mg-testimonials-grid">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} className="mg-testimonial-card" delay={i * 100}>
            <StoryVideo src={t.video} name={t.name} />
            <div className="mg-testimonial-body">
              <h3>{t.name}</h3>
              <p className="mg-testimonial-specialty">{t.specialty}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
