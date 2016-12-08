angular.module('sortingApp.service', [])
.factory('sortingService', function(){
	// mergesort algorithm 
	// time complexity: O(nlogn)
	// space: 0n
	var sortedWords = function(sentence){
		var resultArray = [];
		sentence = sentence.split(" ");
		for(var i = 0; i < sentence.length; i++){
			var word = mergeSort(sentence[i]);
			resultArray.push(word);
		}
		return resultArray.join(" ");
	}

	var mergeSort = function(array){
		if(typeof array === 'string'){
			array = lettersOnly(array)
			array = array.split("")
		}
		if(array.length < 2) {
			return array;
		}
		const middle = Math.floor(array.length/2)
		const left = array.slice(0,middle)
		const right = array.slice(middle)
		const sortedLeft = mergeSort(left)
		const sortedRight = mergeSort(right)
		return merge(sortedLeft, sortedRight)
	}

	var merge = function(left, right){
		if(typeof left === 'string'){
			left = left.split("")
		}
		if(typeof right === 'string'){
			right = right.split("")
		}
		const result = []

		while(left.length && right.length){ // length !<= 0
			if(left[0] <= right[0]){	
				result.push(left.shift())
			}else{
				result.push(right.shift())
			}
		} 
		while(left.length){
			result.push(left.shift())
		}
		while(right.length){
			result.push(right.shift())
		}
		return result.join("");
	}

	var lettersOnly = function(string){
		var matches = string.match(/[a-zA-Z]+/g).join(" ")
		return matches.toLowerCase();
	}

	return {
    sortedWords: sortedWords
}
})