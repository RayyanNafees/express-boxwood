// example/banner/index.js
const { component, css, h1, p, section } = require("boxwood")

const styles = css.load(__dirname)

module.exports = component(
  ({ title, description }) => {
    return section({ className: styles.banner }, [
      h1(title),
      description && p(description),
    ])
  },
  { styles }
)
