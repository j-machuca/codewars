// Create Quark Class

// args -> color , flavor
// create checks for valid values
// static property of bayron_number
// methods interact

const VALID_COLORS = ["red", "blue", "green"];
const VALID_FLAVOR = ["up", "down", "strange", "charm", "top", "bottom"];

class Quark {
  baryon_number = 1 / 3;

  constructor(color, flavor) {
    if (!VALID_COLORS.includes(color.toLowerCase())) {
      throw new Error(
        `Please provide one of the valid colors: ${VALID_COLORS.join(",")} `
      );
    }

    if (!VALID_FLAVOR.includes(flavor.toLowerCase())) {
      throw new Error(
        `Please provide one of the valid flavors: ${VALID_COLORS.join(",")} `
      );
    }

    this.color = color;
    this.flavor = flavor;
  }

  interact(quark) {
    // Another solution could be
    // [this.color, quark.color] = [quark.color, this.color]

    let tempVal = quark.color;

    quark.color = this.color;
    this.color = tempVal;
  }
}
