import { Box, Container, Heading, Text, VStack, HStack, Image, Button, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaUserMd, FaClinicMedical, FaBookMedical, FaPhone } from "react-icons/fa";

const Index = () => {
  const features = [
    {
      icon: FaUserMd,
      title: "专业医师",
      description: "拥有多年临床经验的中医专家为您服务。",
    },
    {
      icon: FaClinicMedical,
      title: "现代诊所",
      description: "融合传统中医与现代医疗设施，为您提供舒适的就医环境。",
    },
    {
      icon: FaBookMedical,
      title: "丰富知识",
      description: "深入研究中医药理论，传承经典，创新实践。",
    },
    {
      icon: FaPhone,
      title: "便捷咨询",
      description: "提供在线咨询服务，随时解答您的健康疑问。",
    },
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as="section" textAlign="center">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt={5}>
          <Image src="https://images.unsplash.com/photo-1583466478015-2dce6bf2f551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNoaW5lc2UlMjBtZWRpY2luZXxlbnwwfHx8fDE3MDkxMTM4MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="中医药" boxSize="300px" objectFit="cover" borderRadius="md" />
          <Image src="https://via.placeholder.com/1080" alt="Banner 2" boxSize="300px" objectFit="cover" borderRadius="md" />
          <Image src="https://via.placeholder.com/1080" alt="Banner 3" boxSize="300px" objectFit="cover" borderRadius="md" />
        </SimpleGrid>
        <Heading as="h1" size="2xl" mt={5}>
          和谐医馆 - 传统中医，现代治疗
        </Heading>
        <Text fontSize="lg" mt={3}>
          和谐医馆致力于提供最优质的中医服务，结合传统治疗方法和现代医疗技术，为您和家人的健康保驾护航。
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} as="section" mt={10}>
        {features.map((feature, index) => (
          <VStack key={index} spacing={4}>
            <Box boxSize="16" bg="teal.500" rounded="full" p={4} color="white">
              <Icon as={feature.icon} boxSize="8" />
            </Box>
            <Heading as="h3" size="md">
              {feature.title}
            </Heading>
            <Text>{feature.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>

      <HStack justifyContent="center" spacing={4} as="section" mt={10}>
        <Button colorScheme="teal" leftIcon={<FaPhone />}>
          联系我们
        </Button>
        <Button colorScheme="teal" variant="outline" leftIcon={<FaBookMedical />}>
          了解更多
        </Button>
      </HStack>
    </Container>
  );
};

export default Index;
