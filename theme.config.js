const YEAR = new Date().getFullYear();

const footer = <footer style={{ marginTop: "8rem" }}>
  <small>
    <time>{YEAR}</time>
    © CodePsy-2001.
    <a href="/feed.xml" style={{ float: "right" }}>RSS</a>
  </small>
</footer>

const head = ({ title, meta }) => <>
  {meta.title && <>
    <meta property="og:title" content={meta.title}/>
    <meta name="twitter:title" content={meta.title}/>
  </>}
  {meta.description && <>
    <meta name="description" content={meta.description}/>
    <meta property="og:description" content={meta.description}/>
    <meta name="twitter:description" content={meta.description}/>
  </>}
  {meta.tag && <meta name="keywords" content={meta.tag}/>}
  {meta.author && <meta name="author" content={meta.author} />}
</>

export default {
  darkMode: true,
  head,
  footer,
  readMore: null,
  // navs: [
  //   {
  //     url: 'https://github.com/shuding/nextra',
  //     name: 'Nextra'
  //   }
  // ]
};
