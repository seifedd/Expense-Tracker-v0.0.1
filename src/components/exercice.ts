//Does this code passs the type checker?

function asNumber(val: number | string): number {
  return val as number;
}

console.log(typeof asNumber("20"));
