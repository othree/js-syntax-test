
( ) => {}

function xd (arg) { return arg; }

let p = (arg) => {};

let s = new Set(arr.filter((x) => { return x.p == 1; }));

((foo) => false)
( (foo) => false)
( 
 (foo) => false
)

let variable = (1 + p + (s))

const object = {
    arrowFunctionReturningAnObject: () => ({
        arrowFunctionWithStatements: () => {
            return something;
        },
    }),
};

app.get('/*', (req, res) => res.status(404).end());

export default ({method = 'get', url, version = 1, controller, query = {}, data, headers}) => {
  url = controller ? url : `/api/v${version}${url}`
  let token = session.getToken()
}

import React, { PropTypes } from 'react'
import { languages } from '../config'

function Form ({ handleLanguageChange, language }) {
  return (
    aa => { return 'x'; }
  )
  return (
    <div>
      <label htmlFor='language'>Language: </label>
      <select id='language' value={language} onChange={handleLanguageChange}>
        { languages.map((language, index) => {
          return <option value={language} key={index}> {language} </option>
        })}
      </select>
    </div>
  )
}

export default Form
