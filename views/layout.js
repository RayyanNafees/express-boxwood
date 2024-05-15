// example/layout/index.js
const { component, css, html, body } = require("boxwood")
const head = require("./head")

const styles = css.load(__dirname)

module.exports = component(
  ({ language }, children) => {
    return html({ lang: language }, [
      head(),
      body({ className: styles.layout }, children),
    ])
  },
  { styles }
)
