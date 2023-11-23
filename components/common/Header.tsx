import React from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

interface Props {}

// 그냥 이미지 태그 쓰면 린트 에러뜸

const HeaderComponent = ({}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <img src="/inflearn.png" width={110} height={20} alt="인프런 로고" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
