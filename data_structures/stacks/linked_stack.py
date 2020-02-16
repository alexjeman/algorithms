class Node():
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

    def __str__(self):
        return str(self.__dict__)


class Stack():
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    # High level methods
    def push(self, item):
        new_node = Node(item)
        self.size += 1
        if self.head is None:
            self.set_head(new_node)
            return
        self.insert_after(self.tail, new_node)

    def pop(self):
        node = self.tail
        self.size -= 1
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail = self.tail.prev
        self.remove_node_bindings(node)
        return node

    def empty(self):
        return self.size < 1

    def top(self):
        return self.tail

    def size(self):
        return self.size

    # Base methods
    def set_head(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return

    def insert_after(self, node, new_node):
        if new_node == self.head and new_node == node:
            return
        new_node.prev = node
        new_node.next = node.next
        if node.next is None:
            self.tail = new_node
        else:
            node.next.prev = new_node
        node.next = new_node

    def remove_node_bindings(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None


st = Stack()
print(st.empty())
st.push("A")
st.push("B")
st.push("C")
print(st.empty())
print(st.top())
print(st.pop())
