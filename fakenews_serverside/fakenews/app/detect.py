
from json import load
import numpy as np
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Embedding, Conv1D, MaxPooling1D, Bidirectional, LSTM, concatenate, Dense

# Dummy data (replace with your actual data)
model = load("model.pkl")

labels = [1, 0, 0, 1]  # Fake news = 1, Real news = 0

# Tokenization and padding (replace with your actual preprocessing steps)
vocab_size = 10000
max_length = 50

# Dummy text preprocessing (replace with your actual preprocessing steps)
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

tokenizer = Tokenizer(num_words=vocab_size)
tokenizer.fit_on_texts(texts)
sequences = tokenizer.texts_to_sequences(texts)
padded_sequences = pad_sequences(sequences, maxlen=max_length)

# Model architecture
embedding_dim = 100
filters = 64
kernel_size = 3
lstm_units = 64

input_layer = Input(shape=(max_length,))
embedding_layer = Embedding(input_dim=vocab_size, output_dim=embedding_dim)(input_layer)
conv_layer = Conv1D(filters=filters, kernel_size=kernel_size, activation='relu')(embedding_layer)
maxpool_layer = MaxPooling1D(pool_size=2)(conv_layer)
lstm_layer = Bidirectional(LSTM(units=lstm_units))(maxpool_layer)

# Concatenate convolutional and LSTM features
concatenated = concatenate([maxpool_layer, lstm_layer], axis=-1)

# Dense layer for classification
output_layer = Dense(1, activation='sigmoid')(concatenated)

# Model compilation
model = Model(inputs=input_layer, outputs=output_layer)
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model (replace with your actual training data)
model.fit(padded_sequences, np.array(labels), epochs=10, batch_size=32)

# Example usage (replace with your actual text)

test_sequences = tokenizer.texts_to_sequences(text)
padded_test_sequences = pad_sequences(test_sequences, maxlen=max_length)
prediction = model.predict(padded_test_sequences)

print("Fake news probability:", prediction)
