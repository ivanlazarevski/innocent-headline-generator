const headlineElement = document.querySelector("#headline");
const generateBtn = document.querySelector("#generate-btn");

const getHeadline = (length) => {
  const sentenceArray = [];
  const subject = getRandom(subjects, 3, length);
  const phrase = getRandom(transitive_phrases, 4, length);
  const verb = getRandom(auxiliary_verbs, 3, length);
  const object = getRandom(subjects, 3, length);

  sentenceArray.push(matchVerbAndSubject(subject, verb));
  sentenceArray.push(subject[0]);
  sentenceArray.push(matchVerbAndTense(verb, phrase));
  sentenceArray.push(object[0]);

  if (phrase[3] !== "") {
    sentenceArray[4] = phrase[3];
  }

  let sentence = sentenceArray.join(" ").toUpperCase();
  sentence += "?";
  const textElement = document.createElement("h1");
  textElement.innerText = sentence;
  headlineElement.innerHTML = "";
  headlineElement.appendChild(textElement);
};

const matchVerbAndSubject = (subject, verb) => {
  if ((subject[1] == 1 && subject[1] == 3) || subject[2] > 1) {
    return verb[0];
  }

  return verb[1];
};

const matchVerbAndTense = (verb, phrase) => {
  if (verb[2] == "present") {
    return phrase[0];
  }

  if (verb[2] == "past") {
    return phrase[1];
  }

  if (verb[2] == "active") {
    return phrase[2];
  }
};

const getRandom = (array, segmentLength, arrayLength) => {
  segmentLength = segmentLength ? segmentLength : 1;
  arrayLength = arrayLength ? arrayLength : 50;

  if (array.length === segmentLength) {
    return null;
  }
  if (array.length % segmentLength !== 0) {
    return null;
  }
  const numArray = new Array(arrayLength);
  for (let index = 0; index < numArray.length; index++) {
    numArray[index] = Math.random();
  }
  //Get random element from the array.
  const randomElement = numArray[Math.floor(Math.random() * numArray.length)];
  //Caculate index to use in returned value based on randomElement.
  var calculatedIndex = Math.floor(randomElement * array.length);
  //Make calculatedIndex an interval of segmentLength to guarantee a correctly-positioned index that
  //will not have array[calculatedIndex+segmentLength] go out of bounds.
  calculatedIndex -= calculatedIndex % segmentLength;

  //Populate an array with segmentLength items from a starting at index calculatedIndex.
  const resultArray = [];
  for (let index = 0; index < segmentLength; index++) {
    resultArray.push(array[calculatedIndex + index]);
  }
  return resultArray;
};

generateBtn.addEventListener("click", () => {
  getHeadline(45);
});
