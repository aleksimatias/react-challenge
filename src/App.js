import React, { useState, useEffect } from "react";
import { Container, Input, Button, Flex, Spacer, Box } from "@chakra-ui/react";

import List from "./List";
import "./App.css";

function App() {
  const [item, setItem] = useState({ name: "", description: "", comment: "" });

  // Save and Restore data from localstorage
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");

    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Get value of input and set new state
  const inputChanged = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // Clear form fields
  const clearForm = () => {
    setItem({ name: "", description: "", comment: "" });
  };

  // Add items to list, clear form fields
  const addItem = () => {
    setItems([...items, item]);
    clearForm();
  };

  // Remove item from list
  const deleteItem = (row) => {
    setItems(items.filter((item, index) => index !== row));
  };

  return (
    <div>
      <Flex>
        <Container
          maxW="container.xl"
          bgColor="#f0f0f0"
          borderRadius={10}
          p={3}
          paddingTop={0}
          paddingBottom={2}
          margin="25px auto"
        >
          <Flex marginTop={5}>
            <Box w={400} display="flex">
              <Input
                placeholder="Name"
                name="name"
                value={item.name}
                onChange={inputChanged}
                bgColor="white"
                className="pos-name"
                marginRight={5}
              />
            </Box>
            <Spacer />
            <Box w="70vw" display="flex">
              <Input
                placeholder="Description"
                name="description"
                value={item.description}
                onChange={inputChanged}
                bgColor="white"
                className="pos-desc"
              />
            </Box>
          </Flex>

          <Flex>
            <Box w="100vw" display="flex" marginTop={5}>
              <Input
                placeholder="Comment"
                name="comment"
                value={item.comment}
                onChange={inputChanged}
                bgColor="white"
                className="pos-comm"
              />
            </Box>
          </Flex>
          <Flex marginTop={5} justify="flex-end">
            <Button
              onClick={addItem}
              marginRight={5}
              colorScheme="green"
              _hover={{ bg: "green.600", color: "#f0f0f0" }}
              variant="outline"
            >
              Add
            </Button>
            <Button
              onClick={clearForm}
              marginRight={5}
              colorScheme="orange"
              _hover={{ bg: "orange.600", color: "#f0f0f0" }}
              variant="outline"
            >
              Clear
            </Button>
          </Flex>
        </Container>
      </Flex>
      <List items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
