var LinkedList = function() {
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;
  return linkedList
};
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
};

//Find the Kth element
var findKthElement = function(k,linkedList) {
  p1= linkedList.head;
  p2= linkedList.head;

  for (var i=1; i <=k; i++) {
    if (p1.next !== null) {
      p1 = p1.next;
    };
  };
  while (p1.next !== null) {
    p1= p1.next;
    p2= p2.next;
  };
  return p2.value;
}

//Delete Node with given only that node
var deleteNode = function (node) {
// swap the node with next node
  node.value = node.next.value;
  node.next= node.next.next;
};