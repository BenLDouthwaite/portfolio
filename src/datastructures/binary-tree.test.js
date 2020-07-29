import BinaryTree from "./binary-tree";

describe("Binary Tree", () => {
  test("Binary Tree - Insert", () => {
    const bt = new BinaryTree();
    bt.insert(10);
    bt.insert(6);
    bt.insert(4);
    bt.insert(8);
    bt.insert(14);
    bt.insert(12);
    bt.insert(16);

    bt.traversal();

    expect(bt).toEqual({
      root: {
        value: 10,
        left: {
          value: 6,
          left: {
            value: 4,
            left: null,
            right: null,
          },
          right: {
            value: 8,
            left: null,
            right: null,
          },
        },
        right: {
          value: 14,
          left: {
            value: 12,
            left: null,
            right: null,
          },
          right: {
            value: 16,
            left: null,
            right: null,
          },
        },
      },
    });
  });
});
