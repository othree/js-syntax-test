export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

export default function(num1, num2) {
    return num1 + num2;
}

export { myFunc as default } from 'foo';
export { default as otherFunc } from 'foo';
export { default } from 'foo';
export { default as default } from 'foo';

export default ({method = 'get', url, version = 1, controller, query = ({}), data, headers}) => {
  url = controller ? url : `/api/v${version}${url}`
  let token = session.getToken()
}
