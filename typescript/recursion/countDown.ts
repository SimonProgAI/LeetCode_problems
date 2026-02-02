function countDown(num: number) {
  if (num > 0) {
    console.log(num);
  }
  if (num === 0) {
    console.log("Blast off!");
    return;
  }

  setTimeout(() => countDown(num - 1), 500);
}

// countDown(5);

function countUp(currentCount: number, target: number) {
  if (currentCount < target) {
    console.log(currentCount);
  } else if (currentCount === target) {
    console.log(currentCount,"Done!");
    return; 
  } else {
    console.log("currentCount must be smaller or equal to target");
    return;
  }
  setTimeout(() => countUp(currentCount + 1, target), 500);
}

countUp(1, 5);
