async function mine(s) {
  return new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono con un retardo de 100ms.
    setTimeout(function () {
      let diamonds = 0;

      while (s.includes("<>")) {
        diamonds += (s.match(/<>/g) || []).length;
        s = s.replace(/<>/g, "");
      }

      resolve(diamonds);
    }, 100);
  });
}

test("we can mine diamonds", async () => {
  await expect(mine("")).resolves.toBe(0);
  await expect(mine("<>")).resolves.toEqual(1);
  await expect(mine("<<>>")).resolves.toEqual(2);
  await expect(mine("<><<>><<")).resolves.toEqual(3);
});
