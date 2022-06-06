function spock(p1, p2) {
  let winner = p2;

  if (p1 === p2) {
    return "empate";
  }

  if (p1 === "papel" && (p2 === "piedra" || p2 === "spock")) {
    winner = p1;
  }

  if (p1 === "tijeras" && (p2 === "papel" || p2 === "lagarto")) {
    winner = p1;
  }

  if (p1 === "lagarto" && (p2 === "papel" || p2 === "spock")) {
    winner = p1;
  }

  if (p1 === "spock" && (p2 === "piedra" || p2 === "tijeras")) {
    winner = p1;
  }

  if (p1 === "piedra" && (p2 === "lagarto" || p2 === "tijeras")) {
    winner = p1;
  }

  return winner;
}
module.exports = spock;
