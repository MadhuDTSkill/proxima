import React from 'react'

const Title = ({
  flag,
  title
}) => {
  return (
    <span className={flag ? '' : 'zero'}>{title ? title : 'Proxima'}</span>
  )
}

export default Title