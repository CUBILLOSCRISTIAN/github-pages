import fetchData from "./GetJson.js";
import * as tf from "@tensorflow/tfjs";
fetchData()
  .then((data) => {
    // Convertir los datos JSON en tensores
    const X = tf.tensor2d(
      data.map((item) => {
        console.log("🚀 ~ .then ~ item:", item.latitud);
        return [parseFloat(item.latitud), parseFloat(item.longitud)];
      })
    );
    console.log("🚀 ~ .then ~ X:", X);
    const y = tf.tensor1d(data.map((item) => parseFloat(item.valorobservado)));
    console.log("🚀 ~ .then ~ y:", y);

    // Dividir los datos en conjuntos de entrenamiento y prueba
    const [X_train, X_test] = tf.split(X, [
      Math.floor(X.shape[0] * 0.7),
      Math.floor(X.shape[0] * 0.3),
    ]);
    console.log("🚀 ~ .then ~ X_train:", X_train);
    console.log("🚀 ~ .then ~ X_test:", X_test);
    const [y_train, y_test] = tf.split(y, [
      Math.floor(y.shape[0] * 0.7),
      Math.floor(y.shape[0] * 0.3),
    ]);
    console.log("🚀 ~ .then ~ y_train:", y_train);
    console.log("🚀 ~ .then ~ y_test:", y_test);

    // Crear y entrenar el modelo de regresión lineal
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [2] })); // Dos características: latitud y longitud
    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });
    return model.fit(X_train, y_train, { epochs: 10 }).then(() => {
      console.log("Modelo entrenado.");

      // Realizar predicciones en los datos de prueba
      const y_pred = model.predict(X_test);

      // Obtener el puntaje del modelo (R^2) en los datos de prueba
      const SS_res = tf.sum(tf.square(tf.sub(y_test, y_pred))).dataSync()[0];
      console.log("🚀 ~ returnmodel.fit ~ SS_res:", SS_res);
      const SS_tot = tf
        .sum(tf.square(tf.sub(y_test, tf.mean(y_test))))
        .dataSync()[0];
      console.log("🚀 ~ returnmodel.fit ~ SS_tot:", SS_tot);
      const score = 1 - SS_res / SS_tot;
      console.log("Puntaje del modelo (R^2):", score);
    });
  })
  .catch((error) => {
    console.error("There was a problem:", error);
  });
