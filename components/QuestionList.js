import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import RadioButtonRN from "radio-buttons-react-native";

const { width } = Dimensions.get("window");

const wrongAns = [];

const RenderQuestion = ({ item, index, onSelection }) => {
  let resultColor = "blue";
  let disableRadioGroup = "auto";

  if (item.selectionState === true) {
    resultColor = "green";
    disableRadioGroup = "none";
  } else if (item.selectionState === false) {
    resultColor = "red";
    disableRadioGroup = "none";
    wrongAns.push(item.question);
    console.log("wrong questions", JSON.stringify(wrongAns));
  }

  return (
    <View key={item.question} pointerEvents={disableRadioGroup}>
      <Text>{item.question}</Text>

      <RadioButtonRN
        data={item.answers}
        selectedBtn={(e) => {
          // console.log(JSON.stringify(e));
          onSelection(e.isCorrect, index);
        }}
        box={true}
      />
      <View
        style={{ width: 40, height: 50, backgroundColor: resultColor }}
      ></View>
    </View>
  );
};

const QuestionList = ({ questions }) => {
  const ref = useRef(null);

  const mappedQuestions = questions.map((q) => ({
    ...q,
    selectionState: null,
  }));
  const [questionsWithSelection, setQuestionsWithSelection] = useState(
    mappedQuestions
  );

  // const [wrongAns, setWrongAns] = useState([]);

  const handleSelection = (selectionState, index) => {
    const dup = [...questionsWithSelection];
    dup[index].selectionState = selectionState;
    setQuestionsWithSelection(dup);
  };

  return (
    <Carousel
      layout={"default"}
      ref={ref}
      data={questionsWithSelection}
      sliderWidth={width}
      itemWidth={width}
      renderItem={({ item, index }) => (
        <RenderQuestion
          item={item}
          index={index}
          onSelection={handleSelection}
        />
      )}
    />
  );
};

export default QuestionList;

const styles = StyleSheet.create({});
