### Linked List vs Array

A **Linked List** is a linear data structure where elements are not stored in contiguous memory locations. Instead, each element (node) contains a data field and a reference (link) to the next node in the sequence.

An **Array** is a collection of items stored at contiguous memory locations.

#### When Linked List is better than Array

| Feature | Linked List | Array | Winner |
| :--- | :--- | :--- | :--- |
| **Insertion/Deletion at Beginning** | **O(1)** | O(n) | **Linked List** |
| **Insertion/Deletion at End** | O(n) (O(1) if tail is kept) | O(1) (Amortized) | **Array** |
| **Insertion/Deletion at Middle** | O(n) (to find) + O(1) (to link) | O(n) (to shift) | **Linked List** (slight edge) |
| **Size** | **Dynamic** | Fixed / Dynamic (Resizing) | **Linked List** |
| **Random Access** | O(n) | **O(1)** | **Array** |
| **Memory Usage** | More (pointers) | Less (contiguous) | **Array** |

#### Key Advantages of Linked Lists:

1.  **Dynamic Size**: Linked lists can grow or shrink in size during the execution of a program. Arrays have a fixed size (or require expensive resizing operations in the case of dynamic arrays).
2.  **Efficient Insertions/Deletions**:
    *   In an **Array**, inserting or deleting an element (especially at the beginning or middle) requires shifting all subsequent elements, which takes **O(n)** time.
    *   In a **Linked List**, if you have a reference to the node, insertion or deletion is just **O(1)** as it only requires changing a few pointers.
3.  **No Memory Wastage**: In Linked Lists, memory is allocated only when required. In Arrays, we might allocate more memory than needed, or run out of space and need to reallocate and copy.

#### Summary:
- Use **Arrays** when you need **random access** (accessing elements by index) and know the size in advance.
- Use **Linked Lists** when you need **frequent insertions and deletions** (especially at the beginning) and the size of the data is unpredictable.
