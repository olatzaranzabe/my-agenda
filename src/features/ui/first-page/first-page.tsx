import { bind } from '../../../utils/bind';
import styles from './todo.module.css';
import React from 'react';
import { Page } from '../../../core/components/page/page';
import { GetDate } from '../date/getDate';

const cx = bind(styles);

interface Props {
  onClick(): void;
}

export const FirstPage: React.FunctionComponent<Props> = ({ onClick }) => (
  <Page>
    <GetDate></GetDate>
    <div onClick={onClick}>
      <span></span>
    </div>
  </Page>
);
