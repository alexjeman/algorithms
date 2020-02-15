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

    def push(self, item):
        pass

    def pop(self):
        pass

    def is_empty(self):
        pass

    def peek(self):
        pass

    def get_stack(self):
        pass


st = Stack()
print(st.is_empty())
st.push("A")
st.push("B")
print(st.is_empty())
print(st.peek())
st.pop()
print(st.get_stack())
