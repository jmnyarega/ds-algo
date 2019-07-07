class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
   return this.data;
  }
}


class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data, null, null);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current; // subtree parent
        if (data < current.data) {
          current = current.left; // moving parent...
          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }
  
  /**
   * Depth first search tree traversals                 
   *  1. Inorder(Left, Root, Right) 4 2 5 1 3 
   *  2. PreOrder(Root, Left, right) 1 2 4 5 3
   *  3. PostOrder(Left, Right, Root) 4 5 2 3 1
   *
   *               1
   *
   *           2        3 
   *
   *        4    5   
   *
   * Breadth First Traversal/Level Order 1 2 3 4 5
   */

  inorder(root) {
    /* InOrder use cases: 
     * 1. Non-increasing order.
     */
    if (root) {
      this.inorder(root.left); // Left
      console.log(root.data); // Root
      this.inorder(root.right) // Right
    }
  }

  preorder(root) {
    /*
     * PreOrder Usecases:
     *  - used to create a copy of a tree.
     *  - Used to get prefix expression on if an expression. http://en.wikipedia.org/wiki/Polish_notation
     */
    if (root) {
      console.log(root.data); // Root
      this.preorder(root.left); // Left
      this.preorder(root.right); // Right
    }
  }

  postorder(root) {
    /*
     * PostOrder usecases:
     * - Used to delete a tree. https://www.geeksforgeeks.org/write-a-c-program-to-delete-a-tree/
     * - To get postfix of an expression tree. http://en.wikipedia.org/wiki/Reverse_Polish_notation
     */
    if (root) {
      this.postorder(root.left); // left
      this.postorder(root.right); // right
      console.log(root.data); // root
    }
  }
  
  /**
   * Traverse level by level
   */
  breadthFirstTraversal(node) {
    let height = this.height(node.root);
    for (let i = 0; i < height + 1; i++) {
      this.nodeLevel(node, i);
    }
  }

  nodeLevel(node, level) {
    if (node) return null;
    else if (level === 1) {
      console.log(node.data)
    } else {
      this.nodeLevel(node.left, level - 1);
      this.nodeLevel(node.right,level - 1);
    }
  }

  height(node) {
    if (!node) return 0;
    else {
      let leftHeight = this.height(node.left);
      let rightHeight = this.height(node.right);
      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    }
  }

  /*
   * You only need to traverse through the left child nodes. until you get to the last node.
   */
  getMin() {
    let current = this.root;
    while(current.left) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * The best ...
   *
   */
  getMax() {
    let current = this.root;
    while(current.right) {
      current = current.right;
    }
    return current.data;
  }
  
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // complex
  removeNode(node, data) {
    if(!node) return null;
    if (data === node.data) {
      // has no children
      if (!node.left && !node.left) {
        return null;
      }
      // has no left child
      if (!node.left) {
        return node.right;
      }
      // has no right child
      if (!node.right) {
        return node.left;
      }
      // node has two children
      let leastElement = this.getMin(node.right);
      node.data = leastElement;
      node.right = this.removeNode(node.right, leastElement);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  remove(data) {
    this.removeNode(this.root, data);
  }

}
const bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);

bst.breadthFirstTraversal(bst);
/* @TODO @josiah
 * - Add a function to the BST class that counts the number of nodes in a BST
 * - Add a function to the BST class that counts the number of edges in a BST
 */
