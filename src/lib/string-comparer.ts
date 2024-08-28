type StringDiffResult = {
  combinedString: string;
  addedLineNumbers: number[];
  removedLineNumbers: number[];
};

let addedLineNumbers: number[] = [];
let removeLineNumbers: number[] = [];
let linesToDisplay: string[] = [];
let referenceLineIndex = 0;
let newLineIndex = 0;

export default function compareStrings(
  referenceString: string,
  newString: string,
): StringDiffResult {
  initializeValues();

  calculateDiff(referenceString, newString);

  return {
    combinedString: linesToDisplay.join("\n"),
    addedLineNumbers: addedLineNumbers,
    removedLineNumbers: removeLineNumbers,
  };
}

function calculateDiff(referenceString: string, newString: string) {
  const oldLines = referenceString.split("\n");
  const newLines = newString.split("\n");

  while (true) {
    const oldLine = oldLines.at(referenceLineIndex);
    const newLine = newLines.at(newLineIndex);
    if (!oldLine && !newLine) {
      break;
    }

    if (!oldLine && newLine) {
      addNewLineToResult(newLine);
      continue;
    }

    if (!newLine && oldLine) {
      addRemovedLineToResult(oldLine);
      continue;
    }

    if (oldLine == newLine) {
      addLineToResult(newLine!);
      continue;
    }

    const isNewLine = !oldLines.includes(newLine!, referenceLineIndex);

    const isRemovedLine = !newLines.includes(oldLine!, newLineIndex);

    if (isRemovedLine) {
      addRemovedLineToResult(oldLine!);
    }
    if (isNewLine) {
      addNewLineToResult(newLine!);
    }

    if (!isRemovedLine && !isNewLine) {
      addRemovedLineToResult(oldLine!);
    }

    continue;
  }
}

function initializeValues() {
  addedLineNumbers = [];
  removeLineNumbers = [];
  linesToDisplay = [];
  referenceLineIndex = 0;
  newLineIndex = 0;
}

function addLineToResult(line: string) {
  linesToDisplay.push(line);
  newLineIndex++;
  referenceLineIndex++;
}

function addNewLineToResult(line: string) {
  linesToDisplay.push(line);
  addedLineNumbers.push(linesToDisplay.length);
  newLineIndex++;
}
function addRemovedLineToResult(line: string) {
  linesToDisplay.push(line);
  removeLineNumbers.push(linesToDisplay.length);
  referenceLineIndex++;
}
