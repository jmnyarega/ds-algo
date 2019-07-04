const Set = require("./set");

let set;

describe("Tests dictionary ADT", () => {
  beforeEach(() => {
    set = new Set();
  });

  afterEach(() => {
    set.clear();
  });

  test("Add", () => {
    set.add("josiah");
    expect(set.datastore[0]).toEqual("josiah");
  });

  test("remove", () => {
    set.add("josiah");
    set.remove("josiah");
    expect(set.length).toEqual(0);
  });

  test("clear", () => {
    set.add("josiah");
    set.add("james");
    set.clear();
    expect(set.length).toEqual(0);
  });

   test("length", () => {
    set.add("josiah");
    set.add("james");
    set.add("james");
    expect(set.length).toEqual(2);
  });

  test("intersection", () => {
    const set1 = new Set();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    set.add(4);
    set.add(3);
    set.add(1);
    expect(set.interset(set1).datastore).toEqual([3, 1]);
  });
 
  test("union", () => {
    const set1 = new Set();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    set.add(4);
    set.add(5);
    set.add(1);
    expect(set.union(set1).datastore).toEqual([2,3,4,5,1]);
  });

  test("subset", () => {
    const set1 = new Set();
    set1.add(1);
    set1.add(2);
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.subSet(set1)).toBeTruthy();
  });
  
  test("difference", () => {
    const set1 = new Set();
    set1.add(1);
    set1.add(2);
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.difference(set1).datastore).toEqual([3]);
  });
});
