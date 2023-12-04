const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  
  test ("Function without params", () => {
    expect(() => sorting.sortByName()).toThrow()
  });

  test ("Function without sorting", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Властелин Колец",
        "Гарри Поттер",
      ])
    ).toEqual([
        "Властелин Колец",
        "Властелин Колец",
        "Гарри Поттер",
    ]);
  })
});

