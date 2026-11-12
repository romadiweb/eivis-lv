export function HomeFeatureLayout() {
  return (
    <div className="home-feature-layout" aria-hidden="true">
      <div className="home-feature-layout__block home-feature-layout__wide" />
      <div className="home-feature-layout__mosaic">
        <div className="home-feature-layout__block home-feature-layout__tall" />
        <div className="home-feature-layout__block home-feature-layout__strip" />
        <div className="home-feature-layout__block" />
        <div className="home-feature-layout__block" />
      </div>
      <div className="home-feature-layout__sequence">
        {[false, false, true, false, false, true].map((wide, index) => (
          <div
            key={index}
            className={wide
              ? "home-feature-layout__block home-feature-layout__wide"
              : "home-feature-layout__block"}
          />
        ))}
      </div>
    </div>
  );
}
