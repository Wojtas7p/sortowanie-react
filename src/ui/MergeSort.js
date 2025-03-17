export const merge = (arr, start, end, split) => {
  return new Promise((resolve) => {
    let _tmpArr = [];
    let left = start;
    let right = split + 1;
    let count = 0;

    const bars = document.querySelectorAll(".bar");

    const highlightBar = (index, color) => {
      if (bars[index]) {
        bars[index].style.backgroundColor = color;
        bars[index].style.transform = "scale(1.1)";
        bars[index].style.transition = "transform 0.3s, background-color 0.3s";
      }
    };
    const resetBarStyle = (index) => {
      setTimeout(() => {
        if (bars[index]) {
          bars[index].style.backgroundColor = "#2ed8b6";
          bars[index].style.transform = "scale(1)";
        }
      }, 250);
    };

    const mergeStep = () => {
      if (left <= split && right <= end) {
        if (arr[left] <= arr[right]) {
          _tmpArr[count++] = arr[left];
          highlightBar(left, "rgb(60, 210, 110)");
          resetBarStyle(left);
          left++;
        } else {
          _tmpArr[count++] = arr[right];
          highlightBar(right, "rgb(60, 210, 110)");
          resetBarStyle(right);
          right++;
        }

        setTimeout(mergeStep, 200);
      } else {
        while (left <= split) {
          _tmpArr[count++] = arr[left++];
        }
        while (right <= end) {
          _tmpArr[count++] = arr[right++];
        }

        count = 0;
        for (let i = start; i <= end; i++) {
          arr[i] = _tmpArr[count++];
          bars[i].style.height = `${arr[i] * 7}px`;
        }
        resolve("Resolved");
      }
    };

    mergeStep();
  });
};

export const mergeSort = async (arr, start, end) => {
  if (start >= end) return;
  const split = Math.floor((start + end) / 2);
  await mergeSort(arr, start, split);
  await mergeSort(arr, split + 1, end);
  await merge(arr, start, end, split);
};
