import classes from "../../styles/utils.module.css";

export default function Lives() {
  const keywords = ["活着的意义", "人为什么而活", "人生为什么这么短暂"];
  return (
    <div className={classes.homeContainer}>
      <h1 className={classes.header1}>人为什么而活？</h1>
      <p>最近下面这个视频火了</p>
      <iframe
        height="500px"
        width="100%"
        security="restricted"
        sandbox=""
        src="https://www.bilibili.com/video/BV1MN4y177PB/"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
        {" "}
      </iframe>
      <h3>搜索关键词：</h3>
      {keywords.map((keyword, index) => (
        <li><a href='https://zh.wikipedia.org/zh-cn/%E7%94%9F%E5%91%BD%E7%9A%84%E6%84%8F%E7%BE%A9' target="_blank">{keyword}</a></li>
      ))}
      <div className={classes.textCenter}>追求事业?</div>
      <div className={classes.textCenter}>躺平?</div>
      <div className={classes.textCenter}>是不是由于我们还没有适应这个已经发展了的社会</div>
      <div className={classes.textCenter}>不想工作，只想拿钱？或者做点自己想做的事情也能轻松愉快地养活自己，实现自己的价值？</div>
    </div>
  );
}
