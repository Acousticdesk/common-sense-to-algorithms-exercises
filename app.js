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

	dequeue() {
		return this.queue.shift()
	}

	enqueue(value) {
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

log(getNthOfTriangularNumbers(6))

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

log(unique_paths(10, 10))

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

const greatestNumberN = (array) => {
	let greatestSoFar = array[0]

	for (let i = 1; i < array.length; i += 1) {
		if (array[i] > greatestSoFar) {
			greatestSoFar = array[i]
		}
	}

	return greatestSoFar
}

log(greatestNumberN([9, 3, 2, 5, 6, 7, 1, 0, 4]))

const greatestNumberNLogN = (array) => {
	const sorted = quicksort(array)

	return sorted[sorted.length - 1]
}

log(greatestNumberNLogN([9, 3, 2, 5, 6, 7, 1, 0, 4]))

const greatestNumberNPow2 = (array) => {
	for (let i = 0; i < array.length; i += 1) {
		let greatestNumber = true
		for (let j = 0; j < array.length; j += 1) {
			if (array[j] > array[i]) {
				greatestNumber = false
				break
			}
		}
		if (greatestNumber) {
			return array[i]
		}
	}
}

log(greatestNumberNPow2([9, 3, 2, 5, 6, 7, 1, 0, 4]))

class Node {
	constructor(data) {
		this.data = data
	}
}

class LinkedList {
	constructor(value) {
		this.firstNode = new Node(value)
	}

	insertAtIndex(index, value) {
		const newNode = new Node(value)

		if (index === 0) {
			if (this.firstNode) {
				newNode.nextNode = this.firstNode
			}
			this.firstNode = newNode
		}

		let currentNode = this.firstNode
		let currentIndex = 0

		while (currentIndex < index - 1) {
			currentNode = currentNode.nextNode
			currentIndex += 1
		}

		newNode.nextNode = currentNode.nextNode
		currentNode.nextNode = newNode
	}

	read(index) {
		if (index === 0) {
			return this.firstNode
		}

		let currentNode = this.firstNode
		let currentIndex = 0

		while (currentIndex < index) {
			currentNode = currentNode.nextNode
			currentIndex += 1

			if (!currentNode) {
				return
			}
		}

		return currentNode.data
	}

	indexOf(value) {
		let currentNode = this.firstNode
		let currentIndex = 0

		while (currentNode) {
			if (currentNode.data === value) {
				return currentIndex
			}

			currentNode = currentNode.nextNode
			currentIndex += 1
		}
	}

	deleteAtIndex(index) {
		if (index === 0) {
			this.firstNode = this.firstNode.nextNode
			return
		}

		let currentNode = this.firstNode
		let currentIndex = 0

		while (currentIndex < index - 1) {
			currentNode = currentNode.nextNode
			currentIndex += 1
		}

		let nodeAfterDeleted

		if (currentNode.nextNode) {
			nodeAfterDeleted = currentNode.nextNode.nextNode
		}

		currentNode.nextNode = nodeAfterDeleted
	}

	// exercises

	printAll() {
		let currentNode = this.firstNode

		while (currentNode) {
			console.log(currentNode)
			currentNode = currentNode.nextNode
		}
	}

	getLast() {
		let currentNode = this.firstNode

		while (currentNode.nextNode) {
			currentNode = currentNode.nextNode
		}

		return currentNode.data
	}

	reverse() {
		const stack = new Stack()

		let currentNode = this.firstNode

		while (currentNode) {
			stack.push(currentNode)
			currentNode = currentNode.nextNode
		}

		const linkedList = new LinkedList(stack.pop().data)

		let currentIndex = 1

		while (stack.read()) {
			const node = stack.pop()

			linkedList.insertAtIndex(currentIndex, node.data)

			currentIndex += 1
		}

		return linkedList
	}
}

class DoublyLinkedList extends LinkedList {
	constructor(firstValue, lastValue) {
		super(firstValue)

		const lastNode = new Node(lastValue)

		this.firstNode.nextNode = lastNode
		this.lastNode = lastNode
		this.lastNode.previousNode = this.firstNode
	}

	insertAtEnd(value) {
		const newNode = new Node(value)

		if (!this.firstNode) {
			this.firstNode = newNode
			this.lastNode = newNode
		}

		newNode.previousNode = this.lastNode

		this.lastNode.nextNode = newNode
		this.lastNode = newNode
	}

	// exercises

	printAll() {
		let currentNode = this.lastNode

		while (currentNode) {
			console.log(currentNode)
			currentNode = currentNode.previousNode
		}
	}
}

const linkedList = new LinkedList('Once')

linkedList.insertAtIndex(1, 'upon')
linkedList.insertAtIndex(2, 'a')
linkedList.insertAtIndex(3, 'time')

const doublyLinkedList = new DoublyLinkedList('Once', 'upon')

doublyLinkedList.insertAtEnd('a')

console.log(linkedList.reverse(), 'the reversed')

class TreeNode {
	constructor(value, leftChild = null, rightChild = null) {
		this.value = value
		this.leftChild = leftChild
		this.rightChild = rightChild
	}
}

const findSuccessor = (node, nodeRightChild) => {
	if (!nodeRightChild) {
		return null
	}

	let currentNode = nodeRightChild

	while (currentNode.leftChild) {
		currentNode = currentNode.leftChild
	}

	return currentNode
}

const findSuccessorParent = (node, nodeRightChild) => {
	if (!nodeRightChild) {
		return null
	}

	let currentNode = nodeRightChild

	while (currentNode.leftChild.leftChild) {
		currentNode = currentNode.leftChild
	}

	return currentNode
}

class BinarySerchTree {
	constructor(value) {
		this.root = new TreeNode(value)
	}
	insert(value, node) {
		if (!this.root) {
			this.root = new TreeNode(value)
			return
		}

		if (!node) {
			return
		}

		if (value < node.value) {
			if (!node.leftChild) {
				node.leftChild = new TreeNode(value)
				return
			}

			this.insert(value, node.leftChild)
		} else if (value > node.value) {
			if (!node.rightChild) {
				node.rightChild = new TreeNode(value)
			}
			this.insert(value, node.rightChild)
		}
	}
	search(value, node) {
		if (!node) {
			return null
		}

		if (value === node.value) {
			return node
		}

		if (value < node.value) {
			return this.search(value, node.leftChild)
		} else if (value > node.value) {
			return this.search(value, node.rightChild)
		}
	}
	delete(value, node) {
		if (!node) {
			return
		}

		if (value < node.value) {
			if (node.leftChild) {
				if (node.leftChild.value === value) {
					if (!node.leftChild.leftChild) {
						node.leftChild = node.lefthChild.rightChild
					}

					if (!node.leftChild.rightChild) {
						node.leftChild = node.lefthChild.leftChild
					}

					if (node.leftChild.leftChild && node.leftChild.rightChild) {
						const successorNode = findSuccessor(node.leftChild, node.leftChild.rightChild)

						node.leftChild = successorNode

						if (successorNode.rightChild) {
							const successorParent = findSuccessorParent(node.leftChild, node.leftChild.rightChild)

							successorParent.leftChild = successorNode.rightChild
						}
					}
				}

				this.delete(value, node.leftChild)
			}
		} else if (value > node.value) {
			this.delete(value, node.rightChild)
		}
	}
}

const binaryTree = new BinarySerchTree(100)

binaryTree.insert(90, binaryTree.root)
binaryTree.insert(95, binaryTree.root)
binaryTree.insert(105, binaryTree.root)
binaryTree.insert(97, binaryTree.root)

console.log(binaryTree.search(95, binaryTree.root))

binaryTree.delete(97, binaryTree.root)

class TrieNode {
	constructor (value) {
		this.children = {}
	}
}

const isEmpty = (object) => !Object.keys(object).length

class Trie {
	constructor() {
		this.root = new TrieNode()
	}

	search(word) {
		let currentNode = this.root

		for (let char of word) {
			if (currentNode.children[char]) {
				currentNode = currentNode.children[char]
			} else {
				return null
			}
		}

		return currentNode
	}

	insert(word) {
		let currentNode = this.root

		for (let char of word) {
			if (currentNode.children[char]) {
				currentNode = currentNode.children[char]
			} else {
				const newNode = new TrieNode()
				currentNode.children[char] = newNode
				currentNode = newNode
			}
		}

		currentNode.children['*'] = null

		return currentNode
	}

	// exercises

	searchSimilar(word) {
		let currentNode = this.root

		for (let char of word) {
			if (currentNode.children[char]) {
				currentNode = currentNode.children[char]
			}
		}

		return currentNode
	}

	traverseAndPrint(node) {
		if (!node) {
			return
		}

		for (let key in node.children) {
			console.log(key)
			this.traverseAndPrint(node.children[key])
		}
	}

	traverseAndCollect(node, word = '', words = []) {
		// console.log(node, 'from traverse and collect')
		if (!node) {
			words.push(word)
			return words
		}

		for (let key in node.children) {
			if (key !== '*') {
				word += key
			}
			this.traverseAndCollect(node.children[key], word, words)
			word = ''
		}

		return words
	}

	autocorrect(word) {
		let currentNode = this.root
		let matchingPrefix = ''

		for (let char of word) {
			if (currentNode.children[char]) {
				matchingPrefix += char
				currentNode = currentNode.children[char]
			} else {
				const similar = this.searchSimilar(matchingPrefix)

				console.log(similar, 'the matching prefix')
				
				return this.traverseAndCollect(similar).map(wordEnding => matchingPrefix + wordEnding)
			}
		}
	}

	// autocorrect(word, node) {
	// 	if (!node) {
	// 		return
	// 	}

	// 	for (let char in word) {

	// 	}
	// }
}

const trie = new Trie()

trie.insert('hello')
trie.insert('world')
trie.insert('worm')
trie.insert('who')
// trie.insert('whose')
trie.insert('whom')
// trie.insert('')

trie.traverseAndPrint(trie.root)

console.log(trie.autocorrect('whose'))

class GraphVertex {
	constructor(value) {
		this.edges = []
		this.value = value
	}

	addEdge(vertex) {
		this.edges.push(vertex)
	}
}

class Graph {
	shortestPath(startingVertex, destinationVertex) {
		const queue = new Queue()
		const visitedVertexes = {}
		const pathToDestination = {}

		queue.enqueue(startingVertex)

		while (queue.read()) {
			const currentVertex = queue.dequeue()

			for (let adjacentVertex of currentVertex.edges) {
				if (!visitedVertexes[adjacentVertex.value]) {
					visitedVertexes[adjacentVertex.value] = true
					pathToDestination[adjacentVertex.value] = currentVertex.value
					if (adjacentVertex.value === destinationVertex.value) {
						break
					} else {
						queue.enqueue(adjacentVertex)
					}
				}
			}
		}

		const path = [destinationVertex.value]

		let currentPathSlice = pathToDestination[destinationVertex.value]

		while (currentPathSlice !== startingVertex.value) {
			if (!currentPathSlice) {
				return null
			}

			path.push(currentPathSlice)

			currentPathSlice = pathToDestination[currentPathSlice]
		}

		path.push(startingVertex.value)

		return path.reverse()
	}
}

const carlos = new GraphVertex('carlos')
const juan = new GraphVertex('juan')
const jenaro = new GraphVertex('jenaro')
const antonio = new GraphVertex('antonio')

carlos.addEdge(juan)
juan.addEdge(jenaro)
juan.addEdge(antonio)

const graph = new Graph()

console.log(graph.shortestPath(carlos, jenaro))



















