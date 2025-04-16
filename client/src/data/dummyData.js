export const metrics = {
    totalSamples: 792,
    trainSamples: 633,
    testSamples: 159,
  };
  
  export const accuracyData = [
    { model: "ANN_BOW", value: 70 },
    { model: "RF_BOW", value: 68 },
    { model: "ANN_WE", value: 66 },
    { model: "RF_Tfidf", value: 66 },
    { model: "XGB_Tfidf", value: 66 },
    { model: "RF_WE", value: 65 },
    { model: "ANN_Tfidf", value: 65 },
    { model: "XGB_WE", value: 65 },
    { model: "XGB_BOW", value: 63 },
    { model: "XGB_BERT", value: 60 },
    { model: "RF_BERT", value: 59 },
    { model: "RF_GloVe", value: 56 },
    { model: "XGB_GloVe", value: 53 },
  ];
  
  export const trainingCategories = [
    { name: "Trading", value: 380 },
    { name: "Valuation", value: 82 },
    { name: "Reporting", value: 63 },
    { name: "Other", value: 57 },
    { name: "Market Data", value: 51 },
  ];
  
  export const predictedCategories = [
    { name: "Trading", value: 114 },
    { name: "Valuation", value: 19 },
    { name: "Reporting", value: 10 },
    { name: "Market Data", value: 8 },
    { name: "Other", value: 8 },
  ];
  