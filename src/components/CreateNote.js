import LinearProgress from "@mui/material/LinearProgress";
import "../css/Note.css";

function CreateNote({ inputText, textHandler, saveHandler }) {
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note">
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type..."
        maxLength={charLimit}
        onChange={textHandler}
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
}

export default CreateNote;
