import React from 'react'

function Button(props) {

  const isOperator = valor => {
    return isNaN (valor) && (valor !== '.') && (valor !== '=');
};

  return (
    <div className={`button ${isOperator(props.children)? "operator": null}`} onClick={()=>props.clic(props.children)} >
      {props.children}
    </div>
  )
}

export default Button