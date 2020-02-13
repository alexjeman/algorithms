class Node():
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

    def __str__(self):
        return str(self.__dict__)


class LinkedList():
    def __init__(self):
        self.head = None
        self.tail = None

    def set_head(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.insert_before(self.head, node)

    def set_tail(self, node):
        if self.tail is None:
            self.set_head(node)
            return
        self.insert_after(self.tail, node)

    def insert_before(self, node, new_node):
        if new_node == self.head and new_node == self.tail:
            return
        self.remove(new_node)
        new_node.prev = node.prev
        new_node.next = node
        if node.prev is None:
            self.head = new_node
        else:
            node.prev.next = new_node
        node.prev = new_node

    def insert_after(self, node, new_node):
        if new_node == self.head and new_node == self.tail:
            return
        self.remove(new_node)
        new_node.prev = node
        new_node.next = node.next
        if node.next is None:
            self.tail = new_node
        else:
            node.next.prev = new_node
        node.next = new_node

    def insert_at_index(self, index, new_node):
        if index == 1:
            self.set_head(new_node)
            return
        node = self.head
        current_index = 1
        while node is not None and current_index != index:
            node = node.next
            current_index += 1
        if node is not None:
            self.insert_before(node, new_node)
        else:
            self.set_tail(new_node)

    def remove_nodes_with_value(self, value):
        node = self.head
        while node is not None:
            node_to_remove = node
            node = node.next
            if node_to_remove.value == value:
                self.remove(node_to_remove)

    def remove(self, node):
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail = self.tail.prev
        self.remove_node_bindings(node)

    def contains_node_with_value(self, value):
        node = self.head
        while node is not None and node.value != value:
            node = node.next
        return node is not None

    def remove_node_bindings(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        if node.next is not None:
            node.next.prev = node.prev
        node.prev = None
        node.next = None


linkedList = LinkedList()
node1 = Node(1)
node2 = Node(2)


linkedList.remove_nodes_with_value(1)
linkedList.insert_at_index(1, node1)
linkedList.insert_at_index(2, node2)
print(linkedList.head)
print(linkedList.tail)
print(linkedList.contains_node_with_value(1))
