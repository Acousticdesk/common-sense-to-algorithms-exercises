const log = (...messages) => document.write(...messages, '<br />')

const getMissingCharacters = (string) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const presentLettersMap = {}
	const missingCharacters = []

	for (let i = 0; i < string.length; i += 1) {
		presentLettersMap[string[i]] = true
	}

	for (let j = 0; j < alphabet.length; j+= 1) {
		if (!presentLettersMap[alphabet[j]]) {
			missingCharacters.push(alphabet[j])
		}
	}

	return missingCharacters

}

log(getMissingCharacters('he quick brown box jumps over a lazy dog'))

const firstNonDuplicateCharacter = (string) => {
	const presentCharactersMap = {}

	for (let i = 0; i < string.length; i += 1) {
		presentCharactersMap[string[i]] = presentCharactersMap[string[i]] || 0
		presentCharactersMap[string[i]] += 1
	}

	for (let j = 0; j < string.length; j += 1) {
		if (presentCharactersMap[string[j]] === 1) {
			return string[j]
		}
	}

	return null
}

log(firstNonDuplicateCharacter('minimum'))

class Stack {
	constructor() {
		this.stack = []
	}

	pop() {
		return this.stack.pop()
	}

	push(value) {
		this.stack.push(value)
	}

	read() {
		return this.stack[this.stack.length - 1]
	}
}

class Queue {
	constructor() {
		this.queue = []
	}

	dequeu() {
		this.queue.shift()
	}

	push(value) {
		this.queue.push(value)
	}

	read() {
		return this.queue[0]
	}
}

const reverseString = string => {
	const stack = new Stack()
	let reversedString = ''

	for (let i = 0; i < string.length; i += 1) {
		stack.push(string[i])
	}

	while (stack.read()) {
		reversedString += stack.pop()
	}

	return reversedString
}

log(reverseString('abcdefghijklmnopqrstuvwxyz'))

const array = [1, 2, 3, 4, [5, 6, 7, [8 , 9, 10]]]

const printNumbers = array => {
	for (let i = 0; i < array.length; i += 1) {
		if (Array.isArray(array[i])) {
			printNumbers(array[i])
		} else {
			console.log(array[i])
		}
	}
}

printNumbers(array)

// const asyncAction = () => new Promise((resolve, reject) => {
// 	window.setTimeout(() => {
// 		resolve(Math.round(Math.random() * 10))
// 	}, Math.max(Math.random() * 2000, 500))
// })

// const asyncQueue = new Queue()

// asyncQueue.push(asyncAction())
// asyncQueue.push(asyncAction())
// asyncQueue.push(asyncAction())
// asyncQueue.push(asyncAction())
// asyncQueue.push(asyncAction())

// const cleanAsyncQueue = () => {
// 	let fulfilled = true

// 	console.log('clean scheduled')

// 	window.setTimeout(async () => {
// 		while (asyncQueue.read()) {
// 			console.log(asyncQueue.read())
// 			await asyncQueue.read()
// 			asyncQueue.dequeu()
// 		}

// 		if (asyncQueue.read()) {
// 			cleanAsyncQueue()
// 		}
// 	}, 2000)
// }

// cleanAsyncQueue()

// const fields = {
// 	field1: {
// 		touched: true,
// 		visited: false,
// 	},
// 	field2: {
// 		touched: true,
// 		visited: true,
// 	},
// 	field3: {
// 		field4: {
// 			touched: true,
// 			visited: false,
// 		},
// 	},
// }

// const isNested = (fields) => Object.values(fields).some((field) => typeof field === 'object')

// const isAnyTouched = (fields) => {
// 	const innerFields = Object.values(fields)
// 	let isTouchedFound = false

// 	for (let i = 0; i < innerFields.length; i += 1) {
// 		if (isNested(innerFields[i])) {
// 			isTouchedFound = isAnyTouched(innerFields[i])
// 		} else {
// 			isTouchedFound = innerFields[i].touched === true && innerFields[i].visited === true
// 		}

// 		if (isTouchedFound) {
// 			return true
// 		}
// 	}

// 	return false
// }

// console.log(isAnyTouched(fields), 'the debug')

const getTotalCharacters = (array) => {
	if (array.length === 0) {
		return 0
	}
	return array[0].length + getTotalCharacters(array.slice(1))
}

log(getTotalCharacters(["ab", "c", "def", "ghij"]))

const getEvenNumbers = (array) => {
	if (array.length === 0) {
		return []
	}

	const arrayOfEvens = [
		...getEvenNumbers(array.slice(1)),
	]

	if (array[0] % 2 === 0) {
		arrayOfEvens.push(array[0])
	}

	return arrayOfEvens
}

log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const getNthOfTriangularNumbers = (n) => {
	if (n === 1 || n <= 0) {
		return 1
	}

	return getNthOfTriangularNumbers(n - 1) + n
}

log(getNthOfTriangularNumbers(6),)

const getPositionOfX = (string, index = 0) => {
	if (string.length === 0) {
		return -1
	}
	if (string[0] === 'x' || string[0] === 'X') {
		return index
	}
	return getPositionOfX(string.slice(1), index + 1)
}

log(getPositionOfX('abcdefghijklmnopqrstuvwxyz'))

const golomb = (n, memo = {}) => {
	if (n === 1) {
		return 1
	}

	if (!memo[n]) {
		memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
	}

	return memo[n];
}

log(golomb(6000),)

const unique_paths = (rows, columns, memo = {}) => {
	if (rows === 1 || columns === 1) {
		return 1
	}

	if (!memo[rows]) {
		memo[rows] = {}
	}

	if (!memo[rows][columns]) {
		memo[rows][columns] = unique_paths(rows - 1, columns, memo) + unique_paths(rows, columns - 1, memo)
	}

	return memo[rows][columns]
}

log(unique_paths(10, 10),)

const partition = (array, leftPointer = 0, rightPointer) => {
	rightPointer = rightPointer || array.length - 1
	pivotPointer = rightPointer
	rightPointer -= 1

	while (true) {
		while (array[leftPointer] < array[pivotPointer]) {
			leftPointer += 1
		}

		while (array[rightPointer] > array[pivotPointer]) {
			rightPointer -= 1
		}

		if (leftPointer >= rightPointer) {
			break
		} else {
			const temp = array[leftPointer]
			array[leftPointer] = array[rightPointer]
			array[rightPointer] = temp
		}
	}

	const temp = array[leftPointer]
	array[leftPointer] = array[pivotPointer]
	array[pivotPointer] = temp

	return leftPointer
}

log(partition([1, 3, 5, 7, 8, 100, 3, 2]))

const quicksort = (array, leftIndex, rightIndex) => {
	leftIndex = leftIndex || 0
	rightIndex = Number.isInteger(rightIndex) ? rightIndex : array.length - 1

	if (rightIndex - leftIndex <= 0) {
		return
	}

	const pivotIndex = partition(array, leftIndex, rightIndex)

	quicksort(array, leftIndex, pivotIndex - 1)
	quicksort(array, pivotIndex + 1, rightIndex)

	return array
}

log(quicksort([1, 3, 5, 7, 8, 100, 3, 2]))

const greatestProductOf3 = (array) => {
	const sorted = quicksort(array)
	let product = 1

	for (let i = sorted.length - 1; i > sorted.length - 4; i -= 1) {
		product *= sorted[i]
	}

	return product
}

log(greatestProductOf3([1, 3, 5, 1]))

const findMissingNumer = (array) => {
	const sorted = quicksort(array)

	for (let i = 0; i < sorted.length; i += 1) {
		if (sorted[i + 1] - sorted[i] !== 1) {
			return sorted[i] + 1
		}
	}

	return null
}

log(findMissingNumer([5, 2, 4, 1, 0]))
log(findMissingNumer([9, 3, 2, 5, 6, 7, 1, 0, 4]))




















