var findMissing = function (list) {
  let currentDiff = list[1] - list[0]
  for(let i = 0; i < list.length - 1; i++) {
    if(currentDiff !== list[i+1] - list[i] ) {
      return list[i] + (list[i+1] - list[i]) / 2
    }  
  }
}
