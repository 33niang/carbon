// pages/embed/index.js

import React from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic'; // 导入 dynamic

// Ours
import Page from '../../components/Page';
import { MetaLinks } from '../../components/Meta';

// 使用 dynamic import 并禁用 SSR
const EditorContainer = dynamic(() => import('../../components/EditorContainer'), {
  ssr: false,
});

class Embed extends React.Component {
  shouldComponentUpdate = () => false;

  render() {
    return (
      <Page flex={true}>
        <MetaLinks />
        <EditorContainer
          router={this.props.router}
          snippet={this.props.snippet}
          readOnly
          embed
        />
      </Page>
    );
  }
}

export default withRouter(Embed);
