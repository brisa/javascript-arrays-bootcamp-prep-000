var chocolateBars = ['snickers', 'hundred', 'grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, anElement){
  var newArr = [anElement, ...arr]
  return newArr

}

function destructivelyAddElementToBeginningOfArray(arr, anElement){
  arr.unshift(anElement)
  return arr
}

function addElementToEndOfArray(arr, anElement){
var newArr = [...arr, anElement]
  return newArr
}
function destructivelyAddElementToEndOfArray(arr, anElement){
arr.push(anElement)
  return arr

}
function accessElementInArray(arr, index){
   return arr[2]
}
function removeElementFromBeginningOfArray(arr){
 var newArr =  arr.shift()
  return arr
}
function removeElementFromEndOfArray(arr){
  var newArr = arr.pop()
  return newArr
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr){
    arr.pop()
  return arr
}
