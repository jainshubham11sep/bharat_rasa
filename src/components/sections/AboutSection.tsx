export default function AboutSection() {
  return (
    <section className="gg-about-wrap">
      <div className="gg-about-inner">
        <h2 className="gg-about-title">Our Founder</h2>
        <div className="gg-about-frame">
          <div className="gg-about-video-wrap">
            <video
              className="gg-about-video"
              src="/media/Value.mov_OpusClip-Captions.mp4"
              title="Our Founder video"
              controls
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
