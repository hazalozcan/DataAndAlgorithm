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
