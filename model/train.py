from imageai.Prediction.Custom import ModelTraining
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

model_trainer = ModelTraining()
model_trainer.setModelTypeAsResNet()
model_trainer.setDataDirectory(r"C:\\Users\\Dominic\\Projects\\Personal\\Superbuy-Scraper\\model\\img")
model_trainer.trainModel(num_objects=5, num_experiments=10, enhance_data=True, batch_size=16, show_network_summary=True,
    continue_from_model=(r"C:\\Users\\Dominic\\Projects\\Personal\\Superbuy-Scraper\\model\\img\\models\\ClothingModel.h5"))