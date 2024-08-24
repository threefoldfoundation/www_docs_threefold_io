import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Part of a Worldwide Grid',
    Svg: require('@site/static/img/clouds.svg').default,
    description: (
      <>
        The ThreeFold Grid is available in 60+ countries with thousands of nodes!
      </>
    ),
  },
  {
    title: 'Get ThreeFold Nodes',
    Svg: require('@site/static/img/nodes.svg').default,
    description: (
      <>
        Get ThreeFold nodes to provide compute, storage and network resources to the world.
      </>
    ),
  },
  {
    title: 'Earn Rewards',
    Svg: require('@site/static/img/rewards.svg').default,
    description: (
      <>
        Deploy nodes and contribute to the growth of the ThreeFold Grid to earn rewards!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
