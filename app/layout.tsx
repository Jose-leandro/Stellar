import '../styles/reset.css'
import '../styles/globals.css'
import React, { type ReactNode } from 'react'

import PropTypes from 'prop-types'

/**
 * RootLayout is a React component that sets up the layout of the page.
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - To be rendered within the layout.
 * @return {ReactElement} The rendered layout element.
 */

interface RootLayoutProps {
  children: ReactNode
}
function RootLayout ({ children }: RootLayoutProps): React.ReactElement {
  return <div>{children}</div>
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default RootLayout
