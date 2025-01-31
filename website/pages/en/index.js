/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        {/*<Logo img_src={imgUrl('docusaurus.svg')} />*/}
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="https://play.google.com/store/apps/details?id=org.tasks&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">Get it on Google Play</Button>
            <Button href="https://f-droid.org/packages/org.tasks/">Get it on F-Droid</Button>
            <Button href="https://www.amazon.com/dp/B00QHGTL7O">Get it on Amazon</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Tasks is licensed under the GNU General Public License v3.0',
        image: imgUrl('octocat.svg'),
        imageAlign: 'top',
        title: 'Free and open-source',
      },
      {
        content: 'Sync with Google Tasks, Apple Reminders, and compatible CalDAV servers, including NextCloud and OwnCloud',
        image: imgUrl('cloud.svg'),
        imageAlign: 'top',
        title: 'Control your data',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
    <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
      <h2>Features</h2>
      <ul style={{ListStyleType: "disc"}}>
        <li>Apply tags to your tasks</li>
        <li>Location based reminders</li>
        <li>Powerful recurrence options</li>
        <li>Dynamic lists using custom filters</li>
        <li>Hide tasks until a later date</li>
        <li>Automatically add tasks to your calendar</li>
        <li><a href={docUrl('google_tasks_intro.html')}>Google Task synchronization</a></li>
        <li>Lots of customization options</li>
      </ul>
      <h2>Subscribe for even more features</h2>
      <ul style={{ListStyleType: "disc"}}>
        <li style={{display: "list-item"}}>Additional themes</li>
        <li><a href={docUrl('caldav_intro.html', null)}>CalDAV synchronization</a></li>
        <li>Synchronize multiple Google Task accounts</li>
        <li><a href={docUrl('tasker.html', null)}>Tasker plugins</a></li>
        <li>Dashclock extension</li>
      </ul>
    </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block>
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/*<FeatureCallout />*/}
          {/*<LearnHow />*/}
          {/*<TryOut />*/}
          {/*<Description />*/}
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
