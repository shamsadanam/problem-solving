export function logObject(obj: Record<string, unknown>) {
  // Iterate over each key in the object
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Key: ${key}, Value: ${obj[key]}`);
    }
  }
}
