import React from 'react'

// children is necessary cuz the button need torepresent something
// version is necessary coz there might be several styles for the button
// type is necessary cuz HTML requier it
// isDisable if we want to enable clicking the button on some condition
function Button({children, version, type, isDisable}) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button
