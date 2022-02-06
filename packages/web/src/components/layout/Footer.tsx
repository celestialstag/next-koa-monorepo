/** @jsxImportSource @emotion/react */
import { baseTheme } from '@themes/base.theme';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { FiHeart } from 'react-icons/fi';

type FooterProps = {
  children?: React.ReactNode;
};

const GithubLink = 'https://github.com/theluckyegg/next-koa-monorepo';

const Footer: NextPage<FooterProps> = ({ children }) => (
  <div className="px-8 pb-2 text-center">
    <span>{children}</span>
    <div className="flex flex-col justify-between">
      <span className="basis-1/2" style={{ fontSize: baseTheme.fontSizes.xs }}>
        Developed with <FiHeart className="inline" /> by Elias Mawa {'-'} <Link href={GithubLink}>Github</Link>
      </span>
      <span className="basis-1/2" style={{ fontSize: baseTheme.fontSizes.xxs }}>
        next-koa-page © 2022
      </span>
    </div>
  </div>
);

export default Footer;
