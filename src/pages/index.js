import Header from "@/components/commons/Header/header"
import Hero from "@/components/pages/HomePage/Hero/Hero"
import Tours from "@/components/pages/HomePage/Tours/Tours"
import CreateTour from "@/components/pages/HomePage/CreateTour/CreateTour"
import Reviews from "@/components/pages/HomePage/Reviews/Reviews"
import TourPhotos from "@/components/pages/HomePage/TourPhotos/TourPhotos"
import Stories from "@/components/pages/HomePage/Stories/Stories"
import CTA from "@/components/pages/HomePage/CTA/CTA"
import Footer from "@/components/commons/Footer/Footer"

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Tours></Tours>
      <CreateTour></CreateTour>
      <Reviews></Reviews>
      <TourPhotos></TourPhotos>
      <Stories></Stories>
      <CTA></CTA>
      <Footer></Footer>
    </>
  )
}