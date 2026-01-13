import CreateTour from "@/components/pages/HomePage/CreateTour/CreateTour";
import CTA from "@/components/pages/HomePage/CTA/CTA";
import Hero from "@/components/pages/HomePage/Hero/Hero";
import Reviews from "@/components/pages/HomePage/Reviews/Reviews";
import Stories from "@/components/pages/HomePage/Stories/Stories";
import TourPhotos from "@/components/pages/HomePage/TourPhotos/TourPhotos";
import Tours from "@/components/pages/HomePage/Tours/Tours";

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
