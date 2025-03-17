import React from "react";
import { Box, Button, Flex, Text, HStack } from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";

const Controls = ({
  numBars,
  setNumBars,
  selectedSort,
  setSelectedSort,
  main,
  isSorting
}) => {
  return (
    <Box>
      <Flex spacing={4}>
        <Box>
          <Text
            htmlFor="numBars"
            color="#ffffff"
            fontWeight="500"
            fontSize="1.2rem"
            mb={2}
            textAlign="center"
          >
            Kolumny :
          </Text>
          <HStack spacing={4} align="center">
            <Button
              onClick={() => setNumBars((prev) => Math.max(5, prev - 1))}
              isDisabled={numBars <= 5}
              background="rgb(60, 210, 110)"
              color="#000000"
              _hover={{ background: "rgb(40, 170, 70)" }}
            >
              <LuMinus />
            </Button>
            <Text
              fontSize="1.5rem"
              fontWeight="600"
              minWidth="60px"
              textAlign="center"
              background="#ffffff"
              boxShadow="0 0 2px 1px rgb(247, 245, 177)"
              p="2"
              borderRadius="md"
            >
              {numBars}
            </Text>
            <Button
              onClick={() => setNumBars((prev) => Math.min(50, prev + 1))}
              isDisabled={numBars >= 50}
              background="rgb(60, 210, 110)"
              color="#000000"
              _hover={{ background: "rgb(40, 170, 70)" }}
            >
              <LuPlus />
            </Button>
          </HStack>
        </Box>

        <Flex flexDirection={"column"}>
          <Text
            htmlFor="algorithm"
            color="#ffffff"
            fontWeight="500"
            fontSize="1.2rem"
            mb={2}
            ml="2rem"
            textAlign="center"
          >
            Sortowanie :
          </Text>
          <select
            id="algorithm"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              padding: ".35rem .8rem",
              background: "rgb(60, 210, 110)",
              borderRadius: "4px",
              marginLeft: "2rem",
              minWidth: "160px",
              textAlign: "center",
              boxShadow: "0 0 2px 1px rgb(247, 245, 177)"
            }}
          >
            <option value="merge">Merge Sort</option>
            <option value="bubble">Bubble Sort</option>
            <option value="quick">Quick Sort</option>
          </select>
        </Flex>
      </Flex>
      <Flex justifyContent="end" mt={4}>
        <Button
          onClick={() => main(false)}
          colorScheme="teal"
          background="rgb(60, 210, 110)"
          textAlign="center"
          minW="160px"
          mr="2rem"
          fontWeight={600}
          fontSize={20}
          _hover={{ background: "rgb(40, 170, 70)" }}
          color="#000000"
          boxShadow="0 0 2px 1px rgb(247, 245, 177)"
        >
          Generuj
        </Button>
        <Button
          onClick={() => main(true)}
          colorScheme="teal"
          isLoading={isSorting}
          loadingText="Sortowanie"
          background="rgb(60, 210, 110)"
          textAlign="center"
          minW="160px"
          fontWeight={600}
          fontSize={20}
          _hover={{ background: "rgb(40, 170, 70)" }}
          color="#000000"
          boxShadow="0 0 2px 1px rgb(247, 245, 177)"
        >
          Sortuj
        </Button>
      </Flex>
    </Box>
  );
};

export default Controls;
