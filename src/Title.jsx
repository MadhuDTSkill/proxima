import React from 'react'

const Title = ({
  flag
}) => {
  return (
    <span className={flag ? '' :'zero'}>Proxima</span>
  )
}

export default Title