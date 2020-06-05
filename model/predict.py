from imageai.Prediction.Custom import CustomImagePrediction
import os

execution_path = os.getcwd()

prediction = CustomImagePrediction()
prediction.setModelTypeAsResNet()
prediction.setModelPath(os.path.join(execution_path, "img/models/ClothingModel.h5"))
prediction.setJsonPath(os.path.join(execution_path, "img/json/model_class.json"))
prediction.loadModel(num_objects=5)

predictions, probabilities = prediction.predictImage(os.path.join(execution_path, "2088a9213fa7c8548040225d3257f31e.jpg"), result_count=5)

for eachPrediction, eachProbability in zip(predictions, probabilities):
    print(eachPrediction , " : " , eachProbability)