/* eslint-disable */
export default function returnHowManyArguments(...params) {
  let counter = 0;
  for (let i of params) {
    counter++;
  }
  return counter;
}