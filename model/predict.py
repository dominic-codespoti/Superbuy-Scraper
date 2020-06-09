from imageai.Prediction.Custom import CustomImagePrediction
import os

def predict(imageName):
    execution_path = os.getcwd()

    prediction = CustomImagePrediction()
    prediction.setModelTypeAsResNet()
    prediction.setModelPath(os.path.join(execution_path, "model/img/models/ClothingModel.h5"))
    prediction.setJsonPath(os.path.join(execution_path, "model/img/json/model_class.json"))
    prediction.loadModel(num_objects=5)

    predictions, probabilities = prediction.predictImage(os.path.join(execution_path, imageName), result_count=5)

    highestProbability = ("classification", 0.0)

    for eachPrediction, eachProbability in zip(predictions, probabilities):
        if float(eachProbability) > highestProbability[1]:
            highestProbability = (eachPrediction , eachProbability)

    return highestProbability[0]
