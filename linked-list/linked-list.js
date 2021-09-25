class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
  link(node) {
    this.next = node
    node.prev = this
  }
  reset() {
    this.prev = null
    this.next = null
  }
}

export class LinkedList {
  #head = null
  #tail = null
  #counter = 0

  push(value) {
    let node = new Node(value)
    if (this.#tail) { node.prev = this.#tail; this.#tail.next = node; this.#tail = node }
    else this.#tail = this.#head = node
    this.#counter++
  }

  pop() {
    let gift = this.#tail
    if (this.#tail == this.#head) this.#tail = this.#head = null
    else { this.#tail = this.#tail.prev; this.#tail.next = null }
    this.#counter--
    return gift.value
  }

  shift() {
    let gift = this.#head
    if (this.#head == this.#tail) this.#head = this.#tail = null
    else { this.#head = this.#head.next; this.#head.prev = null }
    this.#counter--
    return gift.value
  }

  unshift(value) {
    let node = new Node(value)
    if (this.#head) { node.next = this.#head; this.#head.prev = node; this.#head = node }
    else this.#head = this.#tail = node
    this.#counter++
  }

  delete(value) {
    if (this.#head.value == value) return this.shift()
    if (this.#counter <= 1) return
    for (let current = this.#head.next; current != this.#tail; current = current.next) {
      if (current.value == value) {
        current.prev.next = current.next
        current.next.prev = current.prev
        this.#counter--
        return
      }
    }
    if (this.#tail.value == value) return this.pop()
  }

  count() {
    return this.#counter
  }
}
