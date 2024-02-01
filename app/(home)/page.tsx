import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="max-w-[1920px] min-h-screen flex flex-col mx-auto items-center">
      <Button>Shade Cn Testings</Button>
      <Carousel className="w-[80%] mt-8">
        <CarouselContent className="flex gap-1">
          <CarouselItem className="bg-red-300 basis-1/2 h-28 flex items-center justify-center border border-black">Item 1...</CarouselItem>
          <CarouselItem className="bg-blue-500 basis-1/2 h-28 flex items-center justify-center border border-black">Item 2...</CarouselItem>
          <CarouselItem className="bg-green-400 basis-1/2 h-28 flex items-center justify-center border border-black">Item 3...</CarouselItem>
          <CarouselItem className="bg-slate-700 basis-1/2 h-28 flex items-center justify-center border border-black">Item 4...</CarouselItem>
          <CarouselItem className="bg-orange-400 basis-1/2 h-28 flex items-center justify-center border border-black">Item 5...</CarouselItem>
          <CarouselItem className="bg-pink-500 basis-1/2 h-28 flex items-center justify-center border border-black">Item 6...</CarouselItem>
          <CarouselItem className="bg-purple-700 basis-1/2 h-28 flex items-center justify-center border border-black">Item 7...</CarouselItem>
          <CarouselItem className="bg-sky-400 basis-1/2 h-28 flex items-center justify-center border border-black">Item 8...</CarouselItem>
          <CarouselItem className="bg-yellow-600 basis-1/2 h-28 flex items-center justify-center border border-black">Item 9...</CarouselItem>
          <CarouselItem className="bg-red-800 basis-1/2 h-28 flex items-center justify-center border border-black">Item 10...</CarouselItem>
          <CarouselItem className="bg-blue-300 basis-1/2 h-28 flex items-center justify-center border border-black">Item 11...</CarouselItem>
          <CarouselItem className="bg-yellow-400 basis-1/2 h-28 flex items-center justify-center border border-black">Item 12...</CarouselItem>
          <CarouselItem className="bg-sky-800 basis-1/2 h-28 flex items-center justify-center border border-black">Item 13...</CarouselItem>
          <CarouselItem className="bg-slate-300 basis-1/2 h-28 flex items-center justify-center border border-black">Item 14...</CarouselItem>
          <CarouselItem className="bg-orange-700 basis-1/2 h-28 flex items-center justify-center border border-black">Item 15...</CarouselItem>
          <CarouselItem className="bg-red-500 basis-1/2 h-28 flex items-center justify-center border border-black">Item 16...</CarouselItem>
        </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Home;
