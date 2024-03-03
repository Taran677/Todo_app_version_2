import css from "./Empty.module.css";
function Empty() {
  return (
    <div className={`${css["empty-div"]}`}>
      {" "}
      <h2 className={`${css["empty-div"]}`}>Enjoy You Day!</h2>
      <p className={`${css["emptyPara"]}`}>No TODOs Found!</p>
      <div className={`${css["notes"]}`}>
        <div className={`${css["zero"]}`}> ................</div>
        <div className={`${css["one"]}`}>☐</div>
        <div className={`${css["one"]}`}>☐</div>
        <div className={`${css["one"]}`}>☐</div>
        <div className={`${css["one"]}`}>
          <div className={`${css["two"]}`}>☐</div>
          <div className={`${css["two"]} ${css["spl"]}`}>¯\_(ツ)_/¯</div>
        </div>
        <div className={`${css["one"]}`}>☐</div>
        <div className={`${css["one"]}`}>☐</div>
        <div className={`${css["one"]}`}>☐</div>
      </div>
    </div>
  );
}
export default Empty;
