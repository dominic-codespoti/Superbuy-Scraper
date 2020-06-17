from imageai.Prediction.Custom import ModelTraining
import os

def predict(path):
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

    model_trainer = ModelTraining()
    model_trainer.setModelTypeAsResNet()
    model_trainer.setDataDirectory(path)
    model_trainer.trainModel(num_objects=5, num_experiments=10, enhance_data=True, batch_size=16, show_network_summary=True)