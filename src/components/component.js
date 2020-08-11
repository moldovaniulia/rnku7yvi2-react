import React from 'react'
import PropTypes from 'prop-types'

import styles from './component.module.css'
import projectStyles from '../style.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <img
        src={props.src}
        className={` ${projectStyles.thqImage} ${styles['first-image-asset']} `}
      />
    </div>
  )
}

AppComponent.defaultProps = {
  src: '/playground_assets/imageAsset-1000w.jpg',
}

AppComponent.propTypes = {
  src: PropTypes.string,
}

export default AppComponent
