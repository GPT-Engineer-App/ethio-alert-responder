import React, { useState } from "react";
import { Container, VStack, Text, Button, Select, Textarea, useToast, IconButton, HStack } from "@chakra-ui/react";
import { FaAmbulance, FaFireExtinguisher, FaCarSide } from "react-icons/fa";

const Index = () => {
  const [emergencyType, setEmergencyType] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();

  const handleEmergencyTypeChange = (e) => setEmergencyType(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = () => {
    if (!emergencyType || !description) {
      toast({
        title: "Error",
        description: "Please select an emergency type and provide a description.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Simulate sending GPS location and details to emergency services
    toast({
      title: "Emergency Reported",
      description: `Your ${emergencyType} emergency has been reported. Help is on the way!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset form
    setEmergencyType("");
    setDescription("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Ethio Alert
        </Text>
        <Text fontSize="lg">Send emergency workers to your location or report a crime.</Text>

        <Select placeholder="Select Emergency Type" value={emergencyType} onChange={handleEmergencyTypeChange}>
          <option value="Ambulance">Ambulance</option>
          <option value="Fire Fighters">Fire Fighters</option>
          <option value="Police">Police</option>
        </Select>

        <Textarea placeholder="Describe the emergency..." value={description} onChange={handleDescriptionChange} />

        <Button colorScheme="red" width="100%" onClick={handleSubmit}>
          Send Alert
        </Button>

        <HStack spacing={4}>
          <IconButton aria-label="Request Ambulance" icon={<FaAmbulance />} size="lg" colorScheme="red" onClick={() => setEmergencyType("Ambulance")} />
          <IconButton aria-label="Request Fire Fighters" icon={<FaFireExtinguisher />} size="lg" colorScheme="orange" onClick={() => setEmergencyType("Fire Fighters")} />
          <IconButton aria-label="Request Police" icon={<FaCarSide />} size="lg" colorScheme="blue" onClick={() => setEmergencyType("Police")} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
