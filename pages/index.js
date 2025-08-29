// Theirs
import React from 'react';
import { withRouter } from 'next/router';
import Either from 'eitherx';
import dynamic from 'next/dynamic'; // 导入 dynamic

// Ours
import Page from '../components/Page';
import { MetaLinks } from '../components/Meta';

// 使用 dynamic import 并禁用 SSR
const EditorContainer = dynamic(() => import('../components/EditorContainer'), {
  ssr: false,
});

class Index extends React.Component {
  componentDidMount() {
    if (window.workbox && window.workbox.register) {
      window.workbox.register();
    }
  }
  componentWillUnmount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }

  shouldComponentUpdate = () => false;

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
    );
  }
}

export default withRouter(Index);
