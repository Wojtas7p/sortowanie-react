export const bubbleSort = async (arr) => {
  const bars = document.querySelectorAll(".bar");
  let swapped;
  let n = arr.length;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      bars[i].style.backgroundColor = "rgb(60, 210, 110)";
      bars[i + 1].style.backgroundColor = "rgb(60, 210, 110)";
      bars[i].style.transform = "scale(1.1)";
      bars[i + 1].style.transform = "scale(1.1)";

      await new Promise((resolve) => setTimeout(resolve, 30));

      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;

        bars[i].style.height = `${arr[i] * 7}px`;
        bars[i + 1].style.height = `${arr[i + 1] * 7}px`;
      }

      bars[i].style.backgroundColor = "#2ed8b6";
      bars[i + 1].style.backgroundColor = "#2ed8b6";
      bars[i].style.transform = "scale(1)";
      bars[i + 1].style.transform = "scale(1)";
    }
    n--;
  } while (swapped);

  return arr;
};
