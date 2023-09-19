import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({id: 'index.main.feature.1.title'}),
    description: (
      <>
        <Translate id="index.main.feature.1.tagline"/>
      </>
    ),
  },
  {
    title: translate({id: 'index.main.feature.2.title'}),
    description: (
      <>
        <Translate id="index.main.feature.2.tagline"/>
      </>
    ),
  },
  {
    title: translate({id: 'index.main.feature.3.title'}),
    description: (
      <>
        <Translate id="index.main.feature.3.tagline"/>
      </>
    ),
  },
  {
    title: translate({id: 'index.main.feature.4.title'}),
    description: (
      <>
        <Translate id="index.main.feature.4.tagline"/>
      </>
    ),
  },
  {
    title: translate({id: 'index.main.feature.5.title'}),
    description: (
      <>
        <Translate id="index.main.feature.5.tagline"/>
      </>
    ),
  },
  {
    title: translate({id: 'index.main.feature.6.title'}),
    description: (
      <>
        <Translate id="index.main.feature.6.tagline"/>
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
