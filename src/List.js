import React from "react";
import {
  Container,
  Box,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Tooltip,
  ButtonGroup,
} from "@chakra-ui/react";

function List(props) {
  // Control modal component
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Container
        maxW="container.xl"
        minHeight="30vh"
        bgColor="#f0f0f0"
        borderRadius={10}
        paddingTop={2}
        paddingBottom={20}
        margin="25px auto"
      >
        <Table size="sm">
          <Thead>
            <Tr>
              <Th
                width="20vw"
                textTransform="none"
                fontSize="16px"
                textColor="black"
              >
                Name
              </Th>
              <Th textTransform="none" fontSize="16px" textColor="black">
                Description
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.items.map((item, index) => (
              <Tr key={index}>
                <Td maxWidth="15vw">{item.name}</Td>
                <Td maxWidth="30vw">{item.description}</Td>
                <Box>
                  <Flex justify="flex-end">
                    <Td>
                      <ButtonGroup>
                        <Tooltip
                          hasArrow
                          label="View item"
                          placement="left"
                          bg="blue.100"
                          color="black"
                        >
                          <Button
                            marginRight={5}
                            colorScheme="blue"
                            variant="outline"
                            _hover={{ bg: "blue.600", color: "#f0f0f0" }}
                            onClick={onOpen}
                          >
                            Details
                          </Button>
                        </Tooltip>

                        <Modal onClose={onClose} isOpen={isOpen}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader borderBottomWidth="1px">
                              Details
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <div className="drawer-detail">
                                <b>Name: </b>
                                <h3>{item.name}</h3>
                              </div>
                              <div className="drawer-detail">
                                <b>Description: </b>
                                <h3>{item.description}</h3>
                              </div>
                              <div className="drawer-detail">
                                <b>Comment: </b>
                                <h3>{item.comment}</h3>
                              </div>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                colorScheme="blue"
                                mr={3}
                                onClick={onClose}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>

                        <Button
                          marginRight={0}
                          colorScheme="red"
                          _hover={{ bg: "red.900" }}
                          onClick={() => props.deleteItem(index)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </Td>
                  </Flex>
                </Box>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
}

export default List;
