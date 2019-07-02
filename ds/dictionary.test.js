const Dictionary = require("./dictionary");

let dictionary;

describe("Tests dictionary ADT", () => {
  beforeEach(() => {
    dictionary = new Dictionary();
  });

  afterEach(() => {
    dictionary.clear();
  });

  test("Insert", () => {
    dictionary.insert("josiah", "0703922095");
    expect(dictionary.dict.josiah).toEqual("0703922095");
  });

  test("remove", () => {
    dictionary.insert("josiah", "0703922095");
    dictionary.remove("josiah");
    expect(dictionary.length).toEqual(0);
  });

  test("find", () => {
    dictionary.insert("josiah", "0703922095");
    expect(dictionary.find("josiah")).toEqual("0703922095");
  });

  test("clear", () => {
    dictionary.insert("josiah", "0703922095");
    dictionary.insert("james", "07039222222");
    dictionary.clear();
    expect(dictionary.length).toEqual(0);
  });

  test("isEmpty", () => {
    expect(dictionary.isEmpty()).toBeTruthy();
    dictionary.insert("josiah", "0703922095");
    expect(dictionary.isEmpty()).toBeFalsy();
  });

  test("length", () => {
    dictionary.insert("josiah", "0703922095");
    dictionary.insert("james", "07039222222");
    expect(dictionary.length).toEqual(2);
  });
});
