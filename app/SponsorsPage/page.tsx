import heroData from "@/data/heroData";
import Hero from "../components/Hero";
import SponsorIntro from "./SponsorIntro";
import SponsorWhy from "./SponsorWhy";
import SponsorshipPackages from "./SponsorshipPackages";
import SponsorsSlideshow from "./SponsorsSlideshow";
import SpeakerIntro from "./SponsorIntro";

const Sponsorships = () => {

  const { image, title } = heroData.sponsors;
  return (
    <div>
      <main>
        {/* Sponsorship Hero Section */}
        <Hero media={{ type: "image", src: "/hero-image.png" }} title={title} isSpecial={true} />
        <SpeakerIntro />
        <SponsorWhy />
        <SponsorshipPackages />
        <SponsorsSlideshow />
      </main>
    </div>
  );
};

export default Sponsorships;
