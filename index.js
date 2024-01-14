// code your solution here
function superbowlWin(record) {
    const winObject = record.find(entry => entry.result === "W");
  
    if (winObject) {
      return winObject.year;
    } else {
      return undefined;
    }
  }
  
  const record = [
  ];
  
  console.log(superbowlWin(record)); // Output: '2015'
  