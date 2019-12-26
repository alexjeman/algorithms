/** Tree model */
class Tree {
  constructor(root) {
    this.root = root || null;
  }

  traverse(callback) {
    function goThrough(node) {
      callback(node);
      node.children.forEach(child => {
        goThrough(child);
      });
    }
    goThrough(this.root);
  }

  addNode(value, parentValue) {
    const newNode = {
      value,
      children: []
    };

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.traverse(node => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }

  removeNode(value) {
    this._traverse(node => {
      node.children.forEach((childNode, index) => {
        if (childNode.value === value) {
          node.children.splice(index, 1);
        }
      });
    });
  }

  removeNodeByID(id) {
    this.traverse(node => {
      node.children.forEach((childNode, index) => {
        if (childNode.value.id === id) {
          node.children.splice(index, 1);
        }
      });
    });
  }

  search(value) {
    let returnNode = "Not Found";
    this.traverse(node => {
      if (node.value === value) {
        returnNode = node;
      }
    });
    return returnNode;
  }

  displayLeafs(parentValue) {
    const parentNode =
      typeof parentValue === "string" ? this.search(parentValue) : parentValue;
    let leafsRet = [];
    if (parentValue.children && !parentValue.children.length) {
      return parentValue;
    }

    parentNode.children.forEach(child => {
      leafsRet.push(this.displayLeafs(child));
    });

    return leafsRet.flat();
  }
}

class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

/** Operations */ 

const tree = new Tree();

tree.addNode("Computers & Electronics");
tree.addNode("Notebooks", "Computers & Electronics");
tree.addNode("Routers", "Computers & Electronics");
tree.addNode("Desktop Computers", "Computers & Electronics");

tree.addNode("Macbooks", "Notebooks");
tree.addNode("Asus", "Notebooks");

tree.addNode({ id: 1, name: "Macbook Pro", price: 2200, display: '15"' }, "Macbooks");
tree.addNode({ id: 2, name: "Macbook Air", price: 1250, display: '15"' }, "Macbooks");
tree.addNode({ id: 3, name: "Asus Rog", price: 1500, display: '15"' }, "Asus");
tree.addNode({ id: 4, name: "Asus Air", price: 1500, display: '15"' }, "Asus");
tree.addNode({ id: 5, name: "Asus Chromebook", price: 300, display: '15"' }, "Asus");


tree.removeNodeByID(4);

console.log(`
/*** Tree traverse ***/
`);
tree.traverse(node => {
  if (node.value.name) {
    console.log(`  |--${node.value.name}`);
  } else {
    console.log(node.value);
  }
});

console.log(`
/*** Display leaf ***/
`);
console.log(tree.displayLeafs("Macbooks"));
