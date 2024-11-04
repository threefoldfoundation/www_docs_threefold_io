import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common'

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  { scale: 1.0,
    fill:"currentColor",
    title: 'Part of a Worldwide Grid',
    Svg: require('@site/static/img/clouds.svg').default,
    description: (
      <>
        Discover the ThreeFold Grid, available in 60+ countries with thousands of nodes!
      </>
    ),
  },
  { scale: 1.0,
    fill:"currentColor",
    title: 'Get ThreeFold Nodes',
    Svg: require('@site/static/img/nodes.svg').default,
    description: (
      <>
        Get ThreeFold nodes to provide data, cloud and network resources to the world.
      </>
    ),
  },
  { scale: 1.0,
    fill:"currentColor",
    title: 'Earn Rewards',
    Svg: require('@site/static/img/rewards.svg').default,
    description: (
      <>
        Deploy nodes and contribute to the growth of the ThreeFold Platform to earn rewards!
      </>
    ),
  },
];

function Feature({scale, fill, id, title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <Svg transform={"scale(" + scale + ")"} fill={fill} id={id} className={styles.featureSvg} role="img" />
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
