function encode(d: string) {
  const encoded: number[] = [];
  d.split('').map((c: string) => {
    encoded.push((c.charCodeAt(0) / 255))
  })
  return encoded
}


export default function prepare(str: string, longest: number) {
  let numbers = encode(str);
  while (numbers.length < longest) {
    numbers.push(0.12549019607843137);
  }
  return numbers;
}