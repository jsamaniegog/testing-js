test("testing matchers", () => {
  // null es null
  expect(null).toBeNull();

  // null no es undefined
  expect(null).toBeDefined();

  // undefined es undefined
  expect(undefined).toBeUndefined();

  // true siempre es verdad
  expect(true).toBeTruthy();

  // todos los números menos el cero son verdad
  expect(1).toBeTruthy();
  expect(-1).toBeTruthy();

  // todas las cadenas de texto menos cadena vacía es verdad
  expect("a").toBeTruthy();

  // cadena vacía es falso
  expect("").toBeFalsy();

  // false es falso
  expect(false).toBeFalsy();

  // cero es falso
  expect(0).toBeFalsy();

  // 3 es mayor que 1
  expect(3).toBeGreaterThan(1);

  // 1 es menor o igual que 3
  expect(1).toBeLessThanOrEqual(3);

  // NaN es NaN (Not-A-Number)
  expect(NaN).toBeNaN();

  // el array contiene === 1
  expect([1, 2]).toContain(1);

  // el array contiene un elemento con la misma estructura y valores
  expect([1, 2]).toContainEqual(1);
  expect([{ a: "1" }, 2]).toContainEqual({ a: "1" }); // con toContain da error

  // 1 es 1. toBe compara con ===
  expect(1).toBe(1);
  // 1 es 1. toEqual compara estrucutra y valores de forma recursiva
  expect(1).toEqual(1);

  // objeto vacío es igual que objeto vacío en estructura y valor
  expect({}).toEqual({});
  // pero no es el mismo objeto en memoria
  expect({}).not.toBe({});

  // estos objetos son iguales porque b no está definido y por lo tanto son iguales en estructura y valores
  expect({ a: "1" }).toEqual({ a: "1" });
  expect({ a: "1", b: undefined }).toEqual({ a: "1" });
  // pero no estrictamente iguales
  expect({ a: "1", b: undefined }).not.toStrictEqual({ a: "1" });

  // el objeto tiene la propiedad a
  expect({ a: "1" }).toHaveProperty("a");
  // el objeto tiene la propiedad a con el valor '1'
  expect({ a: "1" }).toHaveProperty("a", "1");

  // la función lanza una excepción
  expect(() => {
    throw new Error("fail");
  }).toThrow(new EvalError("fail"));
  expect(() => {
    throw new Error("fail");
  }).toThrowError(new Error("fail"));
  // el mensaje de la excepción tiene que coincidir
  expect(() => {
    throw new Error("fail");
  }).not.toThrowError(new Error());

  // 1 es igual a cualquier cosa
  expect(1).toEqual(expect.anything());
  // 1 es igual a cualquier número
  expect(1).toEqual(expect.any(Number));
  // 1 no es igual a cualquier cadena
  expect(1).not.toEqual(expect.any(String));

  // expect.arrayContaining(array) aprueba que la matriz recibida contiene todos los elementos de la matriz esperada.
  // es decir, la matriz debe contener al menos 1 y 2
  expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
  // lo mismo pero con cadenas, la cadena debe contener tata
  expect("patata").toEqual(expect.stringContaining("tata"));
});
