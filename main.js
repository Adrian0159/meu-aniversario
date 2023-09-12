const dataDoEvento = new Date("Mar 29, 2024 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contador = document.getElementById("contador");

const contandoAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diaAteoEvento = Math.floor(distanciaDoEvento / diaEmMs);
  const horasAteoEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
  const minutosAteoEvento = Math.floor(
    (distanciaDoEvento % horaEmMs) / minutoEmMs
  );
  const segundosAteoEvento = Math.floor(
    (distanciaDoEvento % minutoEmMs) / 1000
  );

  contador.innerHTML = `Faltam ${diaAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s para o meu aniversário`;

  if (distanciaDoEvento < 0) {
    clearInterval(contandoAsHoras);
    contador.innerHTML = ` O dia tão esperado chegou! <br/> Parabêns Adriano, muitos anos de vida.`;
  }
});
