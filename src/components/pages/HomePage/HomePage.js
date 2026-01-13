import Hero from "@/components/pages/HomePage/Hero/Hero";
import Tours from "@/components/pages/HomePage/Tours/Tours";
import CreateTour from "@/components/pages/HomePage/CreateTour/CreateTour";
import Reviews from "@/components/pages/HomePage/Reviews/Reviews";
import TourPhotos from "@/components/pages/HomePage/TourPhotos/TourPhotos";
import Stories from "@/components/pages/HomePage/Stories/Stories";
import CTA from "@/components/pages/HomePage/CTA/CTA";

export default function HomePage() {
  return (
    <>
      <Hero href="#tours"></Hero>
      <Tours id="tours"></Tours>
      <CreateTour id="create-tour"></CreateTour>
      <Reviews id="reviews"></Reviews>
      <TourPhotos id="tour-photos"></TourPhotos>
      <Stories id="stories"></Stories>
      <CTA></CTA>
    </>
  );
}
