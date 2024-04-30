function bombHasBeenPlanted(map, time) {
  // Gear up! We're going in!

  const KIT_DEFUSE = 5;
  const DEFAULT_DEFUSE = 10;

  let defusable = false;

  // Not enough time even with KIT just return false

  if (KIT_DEFUSE > time) return defusable;

  const mapHeight = map.length;
  const mapWidth = map[0].length;

  let kitAvailable = false;
  let kitPosition = {};
  let CTPosition = {};
  let BPosition = {};

  for (let i = 0; i < mapHeight; i++) {
    for (let j = 0; j < mapWidth; j++) {
      // check for value in matrix

      switch (map[i][j]) {
        case "CT":
          CTPosition = {
            x: j,
            y: i,
          };
          break;
        case "B":
          BPosition = {
            x: j,
            y: i,
          };
          break;
        case "K":
          kitPosition = {
            x: j,
            y: i,
          };
          kitAvailable = true;
          break;
        //           default:
        //             continue
      }
    }
  }

  let CTToBDistance = Math.max(
    Math.abs(BPosition.x - CTPosition.x),
    Math.abs(BPosition.y - CTPosition.y)
  );
  let CTToKitDistance = 0;
  let KitToBDistance = 0;

  if (kitAvailable === true) {
    CTToKitDistance = Math.max(
      Math.abs(kitPosition.x - CTPosition.x),
      Math.abs(kitPosition.y - CTPosition.y)
    );
    KitToBDistance = Math.max(
      Math.abs(BPosition.x - kitPosition.x),
      Math.abs(BPosition.y - kitPosition.y)
    );
    if (time >= CTToKitDistance + KitToBDistance + 5) {
      defusable = true;
    }
  }

  if (time >= CTToBDistance + 10) {
    defusable = true;
  }

  return defusable;
}
