class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let cur = this.root;
    if (cur === null){
      this.root = new Node(val);
      return this;
    }
    while (true){
      if (val === cur.val){
        break;
      }
      if (val > cur.val){
        if (cur.right === null){
          cur.right = new Node(val);
          break;
        }
        cur = cur.right;
      }
      else {
        if (cur.left === null){
          cur.left = new Node(val);
          break;
        }
        cur = cur.left;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null){
      this.root = new Node(val);
      return this;
    }
    const recursive = (node) => {
      if (val === node.val){
        return this;
      }
      if (val > node.val){
        if (node.right === null){
          node.right = new Node(val);
          return this;
        }
        return recursive(node.right)
      }
      else {
        if (node.left === null){
          node.left = new Node(val);
          return this;
        }
        return recursive(node.left);
      }
    }
    return recursive(this.root);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let cur = this.root;
    if (cur === null){
      return undefined;
    }
    while (true){
      if (val === cur.val){
        return cur;
      }
      if (val > cur.val){
        if (cur.right === null){
          return undefined;
        }
        cur = cur.right;
      }
      else {
        if (cur.left === null){
          return undefined;
        }
        cur = cur.left;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null){
      return undefined;
    }
    const recursive = (node) => {
      if (val === node.val){
        return node;
      }
      if (val > node.val){
        if (node.right === null){
          return undefined;
        }
        return recursive(node.right)
      }
      else {
        if (node.left === null){
          return undefined;
        }
        return recursive(node.left);
      }
    }
    return recursive(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = [];
    const recursive = (node) => {
      if (node === null) return;
      arr.push(node.val);
      recursive(node.left);
      recursive(node.right);
    }
    recursive(this.root);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = [];
    const recursive = (node) => {
      if (node === null) return;
      recursive(node.left);
      arr.push(node.val);
      recursive(node.right);
    }
    recursive(this.root);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = [];
    const recursive = (node) => {
      if (node === null) return;
      recursive(node.left);
      recursive(node.right);
      arr.push(node.val);
    }
    recursive(this.root);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let prevarr = [];
    let curarr = [this.root];
    const arr = [];
    while (curarr.length !== 0){
      prevarr = curarr;
      curarr = [];
      for (let i of prevarr){
        arr.push(i.val);
        if (i.left !== null){
          curarr.push(i.left);
        }
        if (i.right !== null){
          curarr.push(i.right);
        }
      }
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
