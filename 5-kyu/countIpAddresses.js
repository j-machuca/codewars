// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
// Examples

// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipToBigInt(ip) {
  return ip.split(".").reduce((int, octet) => {
    return (int << 8n) + BigInt(parseInt(octet, 10));
  }, 0n);
}

function ipsBetween(start, end) {
  const startInt = ipToBigInt(start);
  const endInt = ipToBigInt(end);
  return Number(endInt - startInt);
}

// Solution not using left shift

function ipsBetween(start, end) {
  const num = (ip) =>
    ip
      .split(".")
      .map((x) => parseInt(x))
      .reduce((acc, e) => acc * 256 + e, 0);

  return num(end) - num(start);
}
