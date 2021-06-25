import React from "react"
import containerStyles from "tt.module.css"

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)