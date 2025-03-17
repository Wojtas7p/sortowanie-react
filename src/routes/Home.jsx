import { useState, useEffect } from "react";
import Controls from "./Controls";
import { Box, Text, Flex } from "@chakra-ui/react";
import { quickSort } from "../ui/QuickSort";
import { mergeSort } from "../ui/MergeSort";
import { bubbleSort } from "../ui/BubbleSort";

const Home = () => {
  const [randomArr, setRandomArr] = useState(() => {
    const savedArr = localStorage.getItem("randomArr");
    return savedArr ? JSON.parse(savedArr) : [];
  });

  const [barHeights, setBarHeights] = useState(() => randomArr);
  const [isSorting, setIsSorting] = useState(false);
  const [numBars, setNumBars] = useState(() => {
    return Number(localStorage.getItem("numBars")) || 10;
  });

  const [selectedSort, setSelectedSort] = useState(() => {
    return localStorage.getItem("selectedSort") || "merge";
  });

  const [barColors, setBarColors] = useState(() => {
    const savedColors = localStorage.getItem("barColors");
    return savedColors
      ? JSON.parse(savedColors)
      : Array(randomArr.length).fill(" #2ed8b6");
  });

  useEffect(() => {
    localStorage.setItem("randomArr", JSON.stringify(randomArr));
    localStorage.setItem("numBars", numBars);
    localStorage.setItem("barColors", JSON.stringify(barColors));
    localStorage.setItem("selectedSort", selectedSort);
  }, [randomArr, numBars, barColors, selectedSort]);

  useEffect(() => {
    if (randomArr.length === 0) {
      main(false);
    }
  }, []);

  const resetColors = () => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
      bar.style.backgroundColor = " #2ed8b6";
    });
  };

  const completed = () => {
    const bars = document.querySelectorAll(".bar");
    let index = 0;
    const interval = setInterval(() => {
      if (index < bars.length) {
        bars[index].style.backgroundColor = "rgb(60, 210, 110)";
        barColors[index] = "rgb(60, 210, 110)";
        setBarColors([...barColors]);
      } else {
        clearInterval(interval);
        localStorage.setItem("barColors", JSON.stringify(barColors));
      }
    }, 100);
  };

  const randomize = () => {
    let random = [];
    for (let i = 1; i <= numBars; i++) {
      random.push(Math.floor(Math.random() * 50) + 1);
    }
    return random;
  };

  const main = async (sort) => {
    if (!sort) {
      resetColors();
      let random = randomize();
      setRandomArr(random);
      setBarHeights(random);
      setBarColors(Array(random.length).fill(" #2ed8b6"));
    } else {
      setIsSorting(true);
      if (selectedSort === "merge") {
        await mergeSort(barHeights, 0, barHeights.length - 1);
      } else if (selectedSort === "bubble") {
        await bubbleSort(barHeights);
      } else if (selectedSort === "quick") {
        await quickSort(barHeights, 0, barHeights.length - 1);
      }
      setIsSorting(false);
      completed();
    }
  };

  return (
    <Flex
      background={"#242424"}
      minWidth={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      minHeight={"100vh"}
      pb={5}
    >
      <Text color="#ffffff" fontSize="3rem" fontWeight="700">
        Sorting Animation
      </Text>
      <Controls
        numBars={numBars}
        setNumBars={setNumBars}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        main={main}
        isSorting={isSorting}
      />
      <Flex className="bars-wrapper" alignItems="flex-end" mt={10} minH="400px">
        {barHeights.map((height, index) => (
          <Box
            key={index}
            className="bar"
            style={{
              width: "24px",
              height: `${height * 7}px`,
              backgroundColor: barColors[index],
              marginLeft: "6px",
              borderRadius: "1px",
              boxShadow: "1px -1px 1px .1px rgb(247, 245, 177)"
            }}
          ></Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
