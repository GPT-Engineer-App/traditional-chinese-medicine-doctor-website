import { useState } from "react";
import { Box, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <HStack justifyContent="center" position="relative">
      <IconButton icon={<FaChevronLeft />} onClick={previousImage} position="absolute" left="0" top="50%" transform="translateY(-50%)" zIndex="2" />
      <Box boxSize="300px" overflow="hidden" borderRadius="md">
        <Image src={images[currentIndex]} alt={`Banner ${currentIndex + 1}`} boxSize="300px" objectFit="cover" />
      </Box>
      <IconButton icon={<FaChevronRight />} onClick={nextImage} position="absolute" right="0" top="50%" transform="translateY(-50%)" zIndex="2" />
    </HStack>
  );
}
