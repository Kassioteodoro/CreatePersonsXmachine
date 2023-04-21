import jsPDF from 'jspdf'

var doc = new jsPDF();

const generatePDF = (
  imagem,nome, raca, idade, vida, XP,
  magia, forca, habilidade, resistencia,
  armadura, inteligencia, historia, habilidades,
  magias, vantagens, desvantagens, equipamentos
) => {

  let historiaPage = 190
  let habilidadesPage = 230
  let magiasPage = 270
  let vantagensPage = 190
  let desvantagensPage = 230
  let equipamentosPage = 270

  const divisorTexto = (array) => {
    const valueReturn = []
    for (var i = 0; i < array.length; i = i + 3) {
      valueReturn.push(array.slice(i, i + 3));
    }
    return valueReturn
  }
  
doc.setFontSize(40);
doc.text("Create Person Xmachine", 25, 25);
doc.setFontSize(25);
doc.text("Nome:", 20, 50);
doc.text(nome, 48, 50);
doc.text("Raça:", 20, 60);
doc.text(raca, 45, 60);
doc.text("Idade:", 20, 70);
doc.text(idade.toString(), 47, 70);
doc.text("Vida:", 20, 80);
doc.text(vida.toString(), 42, 80);
doc.text("XP:", 20, 90);
doc.text(XP.toString(), 36, 90);
doc.text("Força:", 20, 110);
doc.text(forca.toString(), 47, 110);
doc.text("Magia:", 20, 120);
doc.text(magia.toString(), 48, 120);
doc.text("Habilidade:", 20, 130);
doc.text(habilidade.toString(), 66, 130);
doc.text("Inteligencia:", 20, 140);
doc.text(inteligencia.toString(), 68, 140);
doc.text("Armadura:", 20, 150);
doc.text(armadura.toString(), 63, 150);
doc.text("Resistencia:", 20, 160);
doc.text(resistencia.toString(), 70, 160);
doc.addImage(imagem, "JPEG", 100, 40, 100, 120);
doc.text("historia:", 10, 180);
doc.setFontSize(18);
const historiaList = historia.match(/.{1,28}/g)
for (let int = 0; int < historiaList.length; int++) {
  doc.text(historiaList[int], 5, historiaPage);
  historiaPage += 10;
}
doc.setFontSize(25);
doc.text("Habilidades:", 10, 220);
doc.setFontSize(18);
const habilidadeslist = divisorTexto(habilidades)
for (let int = 0; int < habilidadeslist.length; int++) {
  doc.text(habilidadeslist[int].join(', '), 5, habilidadesPage);
  habilidadesPage += 10;
}
doc.setFontSize(25);
doc.text("Magias:", 10, 260);
doc.setFontSize(18);
const magiaslist = divisorTexto(magias)
for (let int = 0; int < magiaslist.length; int++) {
  doc.text(magiaslist[int].join(', '), 5, magiasPage);
  magiasPage += 10;
}
doc.setFontSize(25);
doc.text("Vantagens:", 110, 180);
doc.setFontSize(18);
const vantagenslist = divisorTexto(vantagens)
for (let int = 0; int < vantagenslist.length; int++) {
  doc.text(vantagenslist[int].join(', '),115, vantagensPage);
  vantagensPage += 10;
}
doc.setFontSize(25);
doc.text("Desvantagens:", 110, 220);
doc.setFontSize(18);
const desvantagenslist = divisorTexto(desvantagens)
for (let int = 0; int < desvantagenslist.length; int++) {
  doc.text(desvantagenslist[int].join(', '), 115, desvantagensPage);
  desvantagensPage += 10;
}
doc.setFontSize(25);
doc.text("Equipamentos:", 110, 260);
doc.setFontSize(18);
const equipamentoslist = divisorTexto(equipamentos)
for (let int = 0; int < equipamentoslist.length; int++) {
  doc.text(equipamentoslist[int].join(', '), 115, equipamentosPage);
  equipamentosPage += 10;
}
doc.save(`${nome}.pdf`);
}

export default generatePDF