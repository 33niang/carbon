// pages/[id].js

import React from 'react'
import { withRouter } from 'next/router'
import Either from 'eitherx'
import dynamic from 'next/dynamic' // 导入 dynamic

// Ours
import Page from '../components/Page'
import { MetaLinks } from '../components/Meta'

// 使用 dynamic import 并禁用 SSR
const EditorContainer = dynamic(() => import('../components/EditorContainer'), {
  ssr: false,
})

class Snippet extends React.Component {
  static async getInitialProps({ query }) {
    try {
      if (query.id) {
        return { snippet: { id: query.id } }
      }
    } catch (e) {
      console.error(e)
    }
    return {}
  }

  shouldComponentUpdate = () => false

  render() {
    return (
      <Page enableHeroText={true} flex={true}>
        <MetaLinks />
        <Either>
          <EditorContainer router={this.props.router} snippet={this.props.snippet} />
          <p>
            An unexpected error has occurred. Please{' '}
            <u>
              <a href="https://github.com/carbon-app/carbon">file an issue here</a>
            </u>
            .
          </p>
        </Either>
      </Page>
    )
  }
}

export default withRouter(Snippet)
