function Node(data) {
    this.data = data
    this.next = null
}

function append(a,b) {
    if(!a)return b
    a.next=append(a.next,b)
    return a
}

console.log(append(new Node(1), new Node(2)))
console.log(append(new Node(1), new Node(2)).next.next, null)
