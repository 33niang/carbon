import React from 'react'
import Link from 'next/link'

import { COLORS } from '../lib/constants'

const Footer = () => (
  <footer role="contentinfo" className="mt3">
    {/* 原有的导航链接 */}
    <nav className="mt3">
      <Link href="/about" prefetch={false}>
        <a className="link" href="/about">
          about
        </a>
      </Link>
      <a className="link" href="https://github.com/carbon-app/carbon">
        source
      </a>
      <a className="link" href="/terms">
        terms
      </a>
      <a className="link" href="/privacy">
        privacy
      </a>
      <a className="link" href="/offsets">
        offsets
      </a>
    </nav>

    {/* 原作者署名 */}
    <div className="mt2 mb2">
      created by{' '}
      <a className="author-link" href="https://twitter.com/carbon_app">
        @carbon_app
      </a>{' '}
      ¬
    </div>

    {/* 您的署名和链接 */}
    <div className="sansan-credit mt2 mb2">
      <span>Deployed by sansan</span>
      <a className="link" href="https://status.zhou.su" target="_blank" rel="noopener noreferrer">
        状态展示
      </a>
      <a className="link" href="https://zhou.su" target="_blank" rel="noopener noreferrer">
        导航主页
      </a>
    </div>

    <style jsx>
      {`
        footer {
          font-size: 14px;
          text-align: center;
        }

        footer > div {
          text-align: center;
          color: ${COLORS.GRAY};
        }

        nav {
          margin: 0 auto;
        }

        a {
          margin-right: 1rem;
        }

        a:last-child {
          margin-right: 0;
        }

        .link {
          color: ${COLORS.PRIMARY};
          text-decoration: none;
        }
        .link:hover {
          color: #fff;
        }

        .author-link {
          color: ${COLORS.PRIMARY};
          text-decoration: none;
        }

        .author-link:hover {
          color: #fff;
        }
        
        /* 为您的署名部分添加样式 */
        .sansan-credit {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem; /* 链接之间的间距 */
        }
      `}
    </style>
  </footer>
)

export default Footer
