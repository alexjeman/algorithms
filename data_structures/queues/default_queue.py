# Python built-in queue
from queue import Queue

q = Queue(maxsize=3)

print(q.qsize())

q.put('a')
q.put('b')
q.put('c')

print("\nFull: ", q.full())

print("\nElements dequeued from the queue")
print(q.get())
print(q.get())
print(q.get())
