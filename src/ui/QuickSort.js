export const quickSort = async (arr, low, high) => {
  if (low < high) {
    const pi = await partition(arr, low, high);
    await quickSort(arr, low, pi - 1);
    await quickSort(arr, pi + 1, high);
  }
};

const partition = async (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  const bars = document.querySelectorAll(".bar");

  for (let j = low; j < high; j++) {
    bars[j].style.backgroundColor = "rgb(60, 210, 110)";
    bars[high].style.backgroundColor = "rgb(100, 250, 175)";
    bars[j].style.transform = "scale(1.1)";
    bars[high].style.transform = "scale(1.1, 1)";

    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];

      bars[i].style.height = `${arr[i] * 7}px`;
      bars[j].style.height = `${arr[j] * 7}px`;
    }

    setTimeout(() => {
      bars[j].style.backgroundColor = "#2ed8b6";
      bars[high].style.backgroundColor = "#2ed8b6";
    }, 100);

    setTimeout(() => {
      bars[j].style.transform = "scale(1)";
      bars[high].style.transform = "scale(1)";
    }, 100);

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  bars[i + 1].style.height = `${arr[i + 1] * 7}px`;
  bars[high].style.height = `${arr[high] * 7}px`;

  return i + 1;
};
